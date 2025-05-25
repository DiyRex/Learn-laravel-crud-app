import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { error } from 'console';
import React from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CircleAlert } from 'lucide-react';


interface Product{
    id: number,
    name: string,
    price: number,
    description: string,
}

interface Props{
    product: Product
}

export default function Edit({product} : Props) {

    const {data, setData, put, processing, errors} = useForm({
        name: product.name,
        price: product.price,
        description: product.description
    })

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(data)
        put(route('product.update', product.id))
    }

    return (
        <AppLayout breadcrumbs={[{title: 'Edit a Product', href: `/products/${product.id}/edit`}]}>
            <Head title="Update Product" />
            <div className="w-8/12 p-4">
                <form onSubmit={handleUpdate} className="">
                    {/* Display Error */}
                    {Object.keys(errors).length > 0 && (
                        <Alert>
                        <CircleAlert className="h-4 w-4" />
                        <AlertTitle>Errors !</AlertTitle>
                        <AlertDescription>
                          <ul>
                            {Object.entries(errors).map(([key, message])=> (
                                <li key={key}>{message as string}</li>
                            ) )}
                          </ul>
                        </AlertDescription>
                      </Alert>
                      
                    )}
                    <div className="mb-3 flex w-6/8 flex-col gap-2.5">
                        <div className="gap-1.5">
                            <Label htmlFor="product_name">Name</Label>
                            <Input id="product_name" type="text" placeholder="Product Name" value={data.name} onChange={(e) => setData('name', e.target.value)}/>
                        </div>
                        <div className="gap-1.5">
                            <Label htmlFor="product_price">Price</Label>
                            <Input id="product_price" type="number" placeholder="Product Price" value={data.price} onChange={(e) => setData('price', parseFloat(e.target.value))}/>
                        </div>
                        <div className="gap-1.5">
                            <Label htmlFor="product_desc">Description</Label>
                            <Textarea id="product_desc" placeholder="Product Description" value={data.description} onChange={(e) => setData('description', e.target.value)}/>
                        </div>
                    </div>
                    <Button type="submit">Update Product</Button>
                </form>
            </div>
        </AppLayout>
    );
}

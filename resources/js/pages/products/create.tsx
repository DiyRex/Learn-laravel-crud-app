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

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Add New Product',
        href: '/products/create',
    },
];

export default function Index() {

    const {data, setData, post, processing, errors} = useForm({
        name: '',
        price: '',
        description: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(data)
        post(route('product.store'))
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add New Product" />
            <div className="w-8/12 p-4">
                <form onSubmit={handleSubmit} className="">
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
                            <Input id="product_price" type="text" placeholder="Product Price" value={data.price} onChange={(e) => setData('price', e.target.value)}/>
                        </div>
                        <div className="gap-1.5">
                            <Label htmlFor="product_desc">Description</Label>
                            <Textarea id="product_desc" placeholder="Product Description" value={data.description} onChange={(e) => setData('description', e.target.value)}/>
                        </div>
                    </div>
                    <Button disabled={processing} type="submit">Add Product</Button>
                </form>
            </div>
        </AppLayout>
    );
}

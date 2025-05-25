<?php

namespace Database\Seeders;

use App\Models\Product;
use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('products')->insert([
            'name' => 'Orange',
            'price' => 180.00,
            'description' => 'orange stock',
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use Auth;
use App\Product;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::where(['user_id' => Auth::user()->id])->orderBy('order')->get();
        return response()->json($products);
    }

    public function productorder(Request $request)
    {
        $product = Product::where(['id' => $request->id])->first();
        $product->order = $request->get('order');
        $product->save();
        return response()->json('Successfully updated');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
          $products = Product::where(['user_id' => Auth::user()->id])->get();
          $newproduct = $products->count() + 1;

          $product = new Product([
              'featured_image' => $request->get('featured_image'),
              'user_id' => Auth::user()->id,
              'order' => $newproduct,
              'page_id' => $request->get('page'),
              'status' => $request->get('status'),
              'title' => $request->get('title'),
              'short_description' => $request->get('short_description'),
              'description' => $request->get('description'),
              'price' => $request->get('price'),
              'regular_price' => $request->get('regular_price'),
              'sku' => $request->get('sku'),
              'additional_shipping' => $request->get('additional_shipping'),
          ]);
          $product->save();
          return response()->json('Successfully added');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $product = Product::find($id);
        return response()->json($product);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $product = Product::find($id);
        $product->featured_image = $request->get('featured_image');
        $product->status = $request->get('status');
        $product->page_id = $request->get('page');
        $product->title = $request->get('title');
        $product->short_description = $request->get('short_description');
        $product->description = $request->get('description');
        $product->price = $request->get('price');
        $product->regular_price = $request->get('regular_price');
        $product->sku = $request->get('sku');
        $product->additional_shipping = $request->get('additional_shipping');
        $product->save();

        return response()->json('Successfully Updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::find($id);
        $product->delete();

        return response()->json('Successfully Deleted');
    }
}

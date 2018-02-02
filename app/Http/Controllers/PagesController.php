<?php

namespace App\Http\Controllers;

use Auth;
use App\User;
use App\Page;
use Illuminate\Http\Request;

class PagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pages = Page::where(['user_id' => Auth::user()->id])->orderBy('order')->with('products')->get();
        return response()->json($pages);
    }

    public function productpages()
    {
        $productpages = Page::where(['user_id' => Auth::user()->id, 'type' => 'Products'])->get();
        return response()->json($productpages);
    }

    public function pageorder(Request $request)
    {
        $page = Page::where(['id' => $request->get('id')])->first();
        $page->order = $request->get('order');
        $page->save();
        return response()->json('Successfully updated');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $pages = Page::where(['user_id' => Auth::user()->id])->get();
        $newpage = $pages->count() + 1;

        $page = new Page([
            'featured_image' => $request->get('featured_image'),
            'user_id' => Auth::user()->id,
            'app_id' => Auth::user()->app->id,
            'order' => $newpage,
            'status' => $request->get('status'),
            'title' => $request->get('title'),
            'type' => $request->get('type'),
            'content' => $request->get('content'),
            'above_content' => $request->get('above_content'),
            'below_content' => $request->get('below_content'),
        ]);
        $page->save();
        return response()->json('Successfully added');
    }

    public function storeimage(Request $request)
    {
        if ($request->hasFile('featured_image')) {
            $file = $request->file('featured_image');
            $path = $request->file('featured_image')->store('uploads');
            $file->move('uploads/' . Auth::user()->id, $file->getClientOriginalName());
            $the_file = `/uploads/` . Auth::user()->id . $file->getClientOriginalName();
        } else {
            $the_file = null;
        }

        return response()->json('Successfully added');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $page = Page::where(['id' => $id])->with('products')->first();
        return response()->json($page);
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
        $page = Page::find($id);

        $page->featured_image = $request->get('featured_image');
        $page->status = $request->get('status');
        $page->title = $request->get('title');
        $page->type = $request->get('type');
        $page->content = $request->get('content');
        $page->above_content = $request->get('above_content');
        $page->below_content = $request->get('below_content');
        $page->business_name = $request->get('business_name');
        $page->business_tagline = $request->get('business_tagline');
        $page->business_description = $request->get('business_description');
        $page->business_email = $request->get('business_email');
        $page->business_phone = $request->get('business_phone');
        $page->business_street_1 = $request->get('business_street_1');
        $page->business_street_2 = $request->get('business_street_2');
        $page->business_city = $request->get('business_city');
        $page->business_county = $request->get('business_county');
        $page->business_country = $request->get('business_country');
        $page->business_postcode = $request->get('business_postcode');
        $page->save();

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
        $page = Page::find($id);
        $page->delete();

        return response()->json('Successfully Deleted');
    }

    public function authid()
    {
        $authid = User::where(['id' => Auth::user()->id])->first();
        return $authid->id;
    }

    public function api($id)
    {
        return Page::where(['user_id' => $id])->with('products')->orderBy('order')->get();
    }
}

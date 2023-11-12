<template>
    <h1>Hello world</h1>
    <div class="flex justify-between flex-nowrap">
        <div v-for="item in product_data.data" class="border  w-96 ">
        <div class="flex justify-between">
            <p class="border">{{ item.id }} </p>
            <p class="border">{{ item.product_name }}</p>
        </div>
        

       
        <img :src="item.blob_urls.product_top_view_images.length>0?item.blob_urls.product_top_view_images[0].url:''">
       
    </div>
    </div>


    <div class=" w-96 mt-12 border-black-950 flex mr-12">
        <div v-for="item in  product_data.data" class="border-2 border-gray-950 w-96 ">
        <div class="flex items-center ">
            <p class="border mr-4  text-blue-600 font-semibold bg-gray-200">{{ item.year }}</p>
            <p class="border text-green-600 font-semibold  w-16 h-6 bg-gray-200">{{ item.familyName }}</p>
        </div>
        <div class="flex items-center ">
            <img :src="item.blob_urls.products.length>0?item.blob_urls.products[0].upload_name:''"  class="w-96">
        </div>
       <p>{{ item.product_name }}</p>
    </div>
    </div>
    
    

   
   


</template>

<script>
export default{
    data(){
        return{
        product_data:{
      
    "error": false,
    "message": "Data fetched success",
    "data": [
        {
            "id": 3546744481442269,
            "product_name": "Event Product Test",
            "product_code": "212311212",
            "category": "Pixel",
            "color": "Red",
            "type": "NFU - Dummy",
            "familyTypeId": 3893986101827728,
            "year": "2014",
            "familyName": "test",
            "typeofProduct": "NFU - Dummy",
            "depth": 1400,
            "width": 1500,
            "height": 500,
            "numberofPlugs": null,
            "isDemoRequired": null,
            "inputTools": [
                {
                    "quantity": "2",
                    "tab": "title",
                    "title": "Shurij"
                }
            ],
            "price": null,
            "description": null,
            "created_at": "2023-11-09T05:36:21.553610Z",
            "updated_at": "2023-11-09T05:36:21.653156Z",
            "isSecurityEquipmentRequired": null,
            "instructions": null,
            "additional_info": "dqqeqweqw",
            "status": "Deplyed in Market",
            "stock": "20",
            "product_image": "product2.png",
            "dialines": [],
            "blob_urls": {
                "product_top_view_images": [
                    {
                        "upload_id": "ik89Uvv2CDPYvusYoshStc",
                        "url": "https://10911-googleprojects-grhcopy-ogp9nq7g43u.ws.system-boostudio.com.au/example.appspot.com/tmp_storage/googlenexus6p_ZhzOUeB.jpg",
                        "type": "",
                        "upload_name": "googlenexus6p.jpg"
                    }
                ],
                "products": [
                    {
                        "upload_id": "gcNcVveJmwqiJVoM6vsRdy",
                        "url": "https://10911-googleprojects-grhcopy-ogp9nq7g43u.ws.system-boostudio.com.au/example.appspot.com/tmp_storage/index-est_XcgCj0V.jpg",
                        "type": "",
                        "upload_name": "index-est.jpg"
                    }
                ],
                "instructionFiles": [
                    {
                        "upload_id": "6bqpvZt58xGEpx9XJqNV2x",
                        "url": "https://10911-googleprojects-grhcopy-ogp9nq7g43u.ws.system-boostudio.com.au/example.appspot.com/tmp_storage/google_fitbit_cRB1Ot4.jpg",
                        "type": "installation",
                        "upload_name": "google_fitbit.jpg"
                    }
                ]
            },
            "input_tools": "[{'quantity': '2', 'tab': 'title', 'title': 'Shurij'}]",
            "fixture_retailer_aggregate": {
                "fixture_data": [],
                "retailer_data": []
            },
            "is_google_product": true,
            "inventoryProductId": 41529755659228,
            "selected_product": {
                "id": 41529755659228,
                "product_name": "Google Tshirt Grey 3xL [B-2A]",
                "product_code": "6209",
                "product_image": "https://boogroup.eprintsoftware.com/store/accounts/ImageHandler.ashx?ImageName=m_6209_google_t-shirt_grey.jpg&type=p&aid=289&cid=2144",
                "sku": "P000042",
                "stock": 7,
                "category": "Modular Demo",
                "warehouse_name": "BOOStudio Warehouse",
                "added_to_stock": true,
                "is_hidden": false,
                "created_at": "2023-10-17T05:54:23.625Z",
                "updated_at": "2023-10-17T05:55:15.112Z"
            }
        },
        {
            "id": 4359238198441700,
            "product_name": "new nov 7 product",
            "product_code": "212311212",
            "category": "Pixel",
            "color": "grey",
            "type": "Modular Demo",
            "familyTypeId": 7805953012884352,
            "year": "2023",
            "familyName": "Nest",
            "typeofProduct": "Modular Demo",
            "depth": 121,
            "width": 121,
            "height": 121,
            "numberofPlugs": 4,
            "isDemoRequired": null,
            "inputTools": [
                {
                    "quantity": "2",
                    "tab": "title",
                    "title": "new t-shirt"
                }
            ],
            "price": null,
            "description": null,
            "created_at": "2023-11-07T05:56:07.966177Z",
            "updated_at": "2023-11-07T05:56:08.030573Z",
            "isSecurityEquipmentRequired": null,
            "instructions": null,
            "additional_info": "e6",
            "status": "Deplyed in Market",
            "stock": "20",
            "product_image": "product2.png",
            "dialines": [],
            "blob_urls": {
                "product_top_view_images": [
                    {
                        "upload_id": "ivyWY3osBcLL7CdmvQEm7f",
                        "url": "https://10911-googleprojects-grhcopy-ogp9nq7g43u.ws.system-boostudio.com.au/example.appspot.com/tmp_storage/polynesia-3021072_1280.jpg",
                        "type": "",
                        "upload_name": "polynesia-3021072_1280.jpg"
                    }
                ],
                "products": [
                    {
                        "upload_id": "28J2cfwnkGVntVFky8Jpwc",
                        "url": "https://10911-googleprojects-grhcopy-ogp9nq7g43u.ws.system-boostudio.com.au/example.appspot.com/tmp_storage/imgs3_0RmjrPY.png",
                        "type": "",
                        "upload_name": "imgs3.png"
                    }
                ],
                "instructionFiles": [
                    {
                        "upload_id": "CJyVKPvjiGbT6BSgdWY7Rm",
                        "url": "https://10911-googleprojects-grhcopy-ogp9nq7g43u.ws.system-boostudio.com.au/example.appspot.com/tmp_storage/berries-2277_1280.jpg",
                        "type": "installation",
                        "upload_name": "berries-2277_1280.jpg"
                    }
                ]
            },
            "input_tools": "[{'quantity': '2', 'tab': 'title', 'title': 'new t-shirt'}]",
            "fixture_retailer_aggregate": {
                "fixture_data": [],
                "retailer_data": []
            },
            "is_google_product": true,
            "inventoryProductId": 53893102220184,
            "selected_product": {
                "id": 53893102220184,
                "product_name": "Google Tshirt Grey S [B-2A]",
                "product_code": "6205",
                "product_image": "https://boogroup.eprintsoftware.com/store/accounts/ImageHandler.ashx?ImageName=m_6205_google_t-shirt_grey.jpg&type=p&aid=289&cid=2144",
                "sku": "P000038",
                "stock": 45,
                "category": "Security Equipment",
                "warehouse_name": "BOOStudio Warehouse",
                "added_to_stock": true,
                "is_hidden": false,
                "created_at": "2023-10-17T05:54:23.691Z",
                "updated_at": "2023-10-17T06:24:32.579Z"
            }
        },
        {
            "id": 5428274265150890,
            "product_name": "Zwe",
            "product_code": "212311212",
            "category": "Pixel",
            "color": "red",
            "type": "NFU - Dummy",
            "familyTypeId": 3893986101827728,
            "year": "2019",
            "familyName": "test",
            "typeofProduct": "NFU - Dummy",
            "depth": 1,
            "width": 2,
            "height": 3,
            "numberofPlugs": 2,
            "isDemoRequired": null,
            "inputTools": [],
            "price": null,
            "description": null,
            "created_at": "2023-10-19T03:04:37.661462Z",
            "updated_at": "2023-10-19T03:04:37.770983Z",
            "isSecurityEquipmentRequired": null,
            "instructions": null,
            "additional_info": "asdsd",
            "status": "Deplyed in Market",
            "stock": "20",
            "product_image": "product2.png",
            "dialines": [],
            "blob_urls": {
                "product_top_view_images": [
                    {
                        "upload_id": "4vkhhMuUSAPw7EQgom29fY",
                        "url": "https://10911-googleprojects-grhcopy-ogp9nq7g43u.ws.system-boostudio.com.au/example.appspot.com/tmp_storage/fitbit1_zCJejyN.jpg",
                        "type": "",
                        "upload_name": "fitbit1.jpg"
                    }
                ],
                "products": [
                    {
                        "upload_id": "evPnoyDDcq9hZsTuBDHJje",
                        "url": "https://10911-googleprojects-grhcopy-ogp9nq7g43u.ws.system-boostudio.com.au/example.appspot.com/tmp_storage/index_5ZhgrbU.jpg",
                        "type": "",
                        "upload_name": "index.jpg"
                    }
                ],
                "instructionFiles": [
                    {
                        "upload_id": "RKaWiD2PfthFjKHMUdx9gw",
                        "url": "https://10911-googleprojects-grhcopy-ogp9nq7g43u.ws.system-boostudio.com.au/example.appspot.com/tmp_storage/exacqvision-pro-vms-spec-0309_i0pwOhp.pdf",
                        "type": "installation",
                        "upload_name": "exacqvision-pro-vms-spec-0309.pdf"
                    }
                ]
            },
            "input_tools": "[]",
            "fixture_retailer_aggregate": {
                "fixture_data": [],
                "retailer_data": []
            },
            "is_google_product": true,
            "inventoryProductId": 41529755659228,
            "selected_product": {
                "id": 41529755659228,
                "product_name": "Google Tshirt Grey 3xL [B-2A]",
                "product_code": "6209",
                "product_image": "https://boogroup.eprintsoftware.com/store/accounts/ImageHandler.ashx?ImageName=m_6209_google_t-shirt_grey.jpg&type=p&aid=289&cid=2144",
                "sku": "P000042",
                "stock": 7,
                "category": "Modular Demo",
                "warehouse_name": "BOOStudio Warehouse",
                "added_to_stock": true,
                "is_hidden": false,
                "created_at": "2023-10-17T05:54:23.625Z",
                "updated_at": "2023-10-17T05:55:15.112Z"
            }
        },
        {
            "id": 406821333328439,
            "product_name": "selected prprdict  id test",
            "product_code": "212311212",
            "category": "Pixel",
            "color": "Cyan",
            "type": "Modular Demo",
            "familyTypeId": 3893986101827728,
            "year": "2015",
            "familyName": "test",
            "typeofProduct": "Modular Demo",
            "depth": 1200,
            "width": 12,
            "height": 123,
            "numberofPlugs": 0,
            "isDemoRequired": null,
            "inputTools": [
                {
                    "quantity": "2",
                    "tab": "title",
                    "title": "32423"
                },
                {
                    "quantity": "2",
                    "tab": "id",
                    "title": {
                        "name": "Google bunting roll from launch kit [B-4B]",
                        "id": 4491566799544589
                    }
                }
            ],
            "price": null,
            "description": null,
            "created_at": "2023-10-18T05:53:17.757836Z",
            "updated_at": "2023-11-07T06:37:18.075941Z",
            "isSecurityEquipmentRequired": null,
            "instructions": null,
            "additional_info": "Test sdd",
            "status": "Deplyed in Market",
            "stock": "20",
            "product_image": "product2.png",
            "dialines": [],
            "blob_urls": {
                "product_top_view_images": [
                    {
                        "upload_id": "UGvcbdH9dN9jEnFkSJG3t2",
                        "url": "https://10911-googleprojects-grhcopy-ogp9nq7g43u.ws.system-boostudio.com.au/example.appspot.com/tmp_storage/index_QuxDz3Y.jpg",
                        "type": "",
                        "upload_name": "index.jpg"
                    }
                ],
                "products": [
                    {
                        "upload_id": "Hk52ufySuuUjZUeJAmYy8v",
                        "url": "https://10911-googleprojects-grhcopy-ogp9nq7g43u.ws.system-boostudio.com.au/example.appspot.com/tmp_storage/google-pixel-watch-charcoal-device-3qt-left_cvV4kSX.png",
                        "type": "",
                        "upload_name": "google-pixel-watch-charcoal-device-3qt-left.png"
                    }
                ],
                "instructionFiles": [
                    {
                        "upload_id": "CY3afvkH54acRFnTnZASwQ",
                        "url": "https://10911-googleprojects-grhcopy-ogp9nq7g43u.ws.system-boostudio.com.au/example.appspot.com/tmp_storage/exacqvision-pro-vms-spec-0309_W8fYY0d.pdf",
                        "type": "installation",
                        "upload_name": "exacqvision-pro-vms-spec-0309.pdf"
                    }
                ]
            },
            "input_tools": "[{'quantity': '2', 'tab': 'title', 'title': '32423'}, {'quantity': '2', 'tab': 'id', 'title': {'name': 'Google bunting roll from launch kit [B-4B]', 'id': 4491566799544589}}]",
            "fixture_retailer_aggregate": {
                "fixture_data": [],
                "retailer_data": []
            },
            "is_google_product": true,
            "inventoryProductId": 53893102220184,
            "selected_product": {
                "id": 53893102220184,
                "product_name": "Google Tshirt Grey S [B-2A]",
                "product_code": "6205",
                "product_image": "https://boogroup.eprintsoftware.com/store/accounts/ImageHandler.ashx?ImageName=m_6205_google_t-shirt_grey.jpg&type=p&aid=289&cid=2144",
                "sku": "P000038",
                "stock": 45,
                "category": "Security Equipment",
                "warehouse_name": "BOOStudio Warehouse",
                "added_to_stock": true,
                "is_hidden": false,
                "created_at": "2023-10-17T05:54:23.691Z",
                "updated_at": "2023-10-17T06:24:32.579Z"
            }
        },
        {
            "id": 3624619794551803,
            "product_name": "Inventory Product Test",
            "product_code": "212311212",
            "category": "Pixel",
            "color": "pink",
            "type": "NFU - Dummy",
            "familyTypeId": 7805953012884352,
            "year": "2015",
            "familyName": "Nest",
            "typeofProduct": "NFU - Dummy",
            "depth": 2000,
            "width": 1000,
            "height": 1000,
            "numberofPlugs": 0,
            "isDemoRequired": null,
            "inputTools": [
                {
                    "quantity": "2",
                    "tab": "title",
                    "title": "Test"
                }
            ],
            "price": null,
            "description": null,
            "created_at": "2023-10-18T05:32:47.108726Z",
            "updated_at": "2023-10-18T05:32:47.176994Z",
            "isSecurityEquipmentRequired": null,
            "instructions": null,
            "additional_info": "A sdsd",
            "status": "Deplyed in Market",
            "stock": "20",
            "product_image": "product2.png",
            "dialines": [],
            "blob_urls": {
                "product_top_view_images": [
                    {
                        "upload_id": "U98hZokUmKFJJnm5scQ5nE",
                        "url": "https://10911-googleprojects-grhcopy-ogp9nq7g43u.ws.system-boostudio.com.au/example.appspot.com/tmp_storage/index_RrgkF9t.jpg",
                        "type": "",
                        "upload_name": "index.jpg"
                    }
                ],
                "products": [
                    {
                        "upload_id": "HCA24SRfrCtjhAd8x75kFT",
                        "url": "https://10911-googleprojects-grhcopy-ogp9nq7g43u.ws.system-boostudio.com.au/example.appspot.com/tmp_storage/index-est_00j0qrs.jpg",
                        "type": "",
                        "upload_name": "index-est.jpg"
                    }
                ],
                "instructionFiles": [
                    {
                        "upload_id": "B5CLvwMKZp8qjK4jrpVBY6",
                        "url": "https://10911-googleprojects-grhcopy-ogp9nq7g43u.ws.system-boostudio.com.au/example.appspot.com/tmp_storage/exacqvision-pro-vms-spec-0309_AQQw4EG.pdf",
                        "type": "installation",
                        "upload_name": "exacqvision-pro-vms-spec-0309.pdf"
                    }
                ]
            },
            "input_tools": "[{'quantity': '2', 'tab': 'title', 'title': 'Test'}]",
            "fixture_retailer_aggregate": {
                "fixture_data": [],
                "retailer_data": []
            },
            "is_google_product": false,
            "inventoryProductId": 41529755659228,
            "selected_product": {
                "id": 41529755659228,
                "product_name": "Google Tshirt Grey 3xL [B-2A]",
                "product_code": "6209",
                "product_image": "https://boogroup.eprintsoftware.com/store/accounts/ImageHandler.ashx?ImageName=m_6209_google_t-shirt_grey.jpg&type=p&aid=289&cid=2144",
                "sku": "P000042",
                "stock": 7,
                "category": "Modular Demo",
                "warehouse_name": "BOOStudio Warehouse",
                "added_to_stock": true,
                "is_hidden": false,
                "created_at": "2023-10-17T05:54:23.625Z",
                "updated_at": "2023-10-17T05:55:15.112Z"
            }
        },
        {
            "id": 2324671986264740,
            "product_name": "tx1",
            "product_code": "212311212",
            "category": "Pixel",
            "color": "Red",
            "type": "NFU - Dummy",
            "familyTypeId": 7805953012884352,
            "year": "2011",
            "familyName": "Nest",
            "typeofProduct": "NFU - Dummy",
            "depth": 2000,
            "width": 1000,
            "height": 1000,
            "numberofPlugs": 3,
            "isDemoRequired": null,
            "inputTools": [
                {
                    "quantity": "2",
                    "tab": "title",
                    "title": "Test"
                }
            ],
            "price": null,
            "description": null,
            "created_at": "2023-10-18T02:30:00.131145Z",
            "updated_at": "2023-10-18T02:30:00.338279Z",
            "isSecurityEquipmentRequired": null,
            "instructions": null,
            "additional_info": "this is just a thing",
            "status": "Deplyed in Market",
            "stock": "20",
            "product_image": "product2.png",
            "dialines": [],
            "blob_urls": {
                "product_top_view_images": [
                    {
                        "upload_id": "5oVad7bYcMWN2ZMoqhEVXX",
                        "url": "https://10911-googleprojects-grhcopy-ogp9nq7g43u.ws.system-boostudio.com.au/example.appspot.com/tmp_storage/AndroidPIT-Nexus-family-group-shot-w1400h1050_2aAOdIg.jpg",
                        "type": "",
                        "upload_name": "AndroidPIT-Nexus-family-group-shot-w1400h1050.jpg"
                    }
                ],
                "products": [
                    {
                        "upload_id": "3YFPECsXHBatoBXSfg4mq8",
                        "url": "https://10911-googleprojects-grhcopy-ogp9nq7g43u.ws.system-boostudio.com.au/example.appspot.com/tmp_storage/index-est_ywzmKfO.jpg",
                        "type": "",
                        "upload_name": "index-est.jpg"
                    }
                ],
                "instructionFiles": [
                    {
                        "upload_id": "fTEXE2DXQUfrtxrzjnioSY",
                        "url": "https://10911-googleprojects-grhcopy-ogp9nq7g43u.ws.system-boostudio.com.au/example.appspot.com/tmp_storage/exacqvision-pro-vms-spec-0309_QejoMUJ.pdf",
                        "type": "installation",
                        "upload_name": "exacqvision-pro-vms-spec-0309.pdf"
                    }
                ]
            },
            "input_tools": "[{'quantity': '2', 'tab': 'title', 'title': 'Test'}]",
            "fixture_retailer_aggregate": {
                "fixture_data": [],
                "retailer_data": []
            },
            "is_google_product": false,
            "inventoryProductId": 53893102220184,
            "selected_product": {
                "id": 53893102220184,
                "product_name": "Google Tshirt Grey S [B-2A]",
                "product_code": "6205",
                "product_image": "https://boogroup.eprintsoftware.com/store/accounts/ImageHandler.ashx?ImageName=m_6205_google_t-shirt_grey.jpg&type=p&aid=289&cid=2144",
                "sku": "P000038",
                "stock": 45,
                "category": "Security Equipment",
                "warehouse_name": "BOOStudio Warehouse",
                "added_to_stock": true,
                "is_hidden": false,
                "created_at": "2023-10-17T05:54:23.691Z",
                "updated_at": "2023-10-17T06:24:32.579Z"
            }
        },
        {
            "id": 595320863046756,
            "product_name": "Test Inventory thing with saurabh",
            "product_code": "212311212",
            "category": "Pixel",
            "color": "12",
            "type": "NCU - Demo",
            "familyTypeId": 7805953012884352,
            "year": "2012",
            "familyName": "Nest",
            "typeofProduct": "NCU - Demo",
            "depth": 1,
            "width": 2,
            "height": 2,
            "numberofPlugs": 2,
            "isDemoRequired": null,
            "inputTools": [
                {
                    "quantity": "3",
                    "tab": "title",
                    "title": "Power Cord"
                }
            ],
            "price": null,
            "description": null,
            "created_at": "2023-10-17T06:36:35.372484Z",
            "updated_at": "2023-10-17T06:36:35.435576Z",
            "isSecurityEquipmentRequired": null,
            "instructions": null,
            "additional_info": "Test",
            "status": "Deplyed in Market",
            "stock": "20",
            "product_image": "product2.png",
            "dialines": [],
            "blob_urls": {
                "product_top_view_images": [
                    {
                        "upload_id": "EHRUpNDTsQShZdKkneReym",
                        "url": "https://10911-googleprojects-grhcopy-ogp9nq7g43u.ws.system-boostudio.com.au/example.appspot.com/tmp_storage/googlenexus6p.jpg",
                        "type": "",
                        "upload_name": "googlenexus6p.jpg"
                    }
                ],
                "products": [
                    {
                        "upload_id": "YrbBZL89ny38Fx9SNKjLUm",
                        "url": "https://10911-googleprojects-grhcopy-ogp9nq7g43u.ws.system-boostudio.com.au/example.appspot.com/tmp_storage/Screenshot 2023-10-17 at 11.38.35\u202fam.png",
                        "type": "",
                        "upload_name": "Screenshot 2023-10-17 at 11.38.35\u202fam.png"
                    }
                ],
                "instructionFiles": [
                    {
                        "upload_id": "JRUyE9hWTW5YyHFVHj7htR",
                        "url": "https://10911-googleprojects-grhcopy-ogp9nq7g43u.ws.system-boostudio.com.au/example.appspot.com/tmp_storage/exacqvision-pro-vms-spec-0309_cBVW6mf.pdf",
                        "type": "installation",
                        "upload_name": "exacqvision-pro-vms-spec-0309.pdf"
                    }
                ]
            },
            "input_tools": "[{'quantity': '3', 'tab': 'title', 'title': 'Power Cord'}]",
            "fixture_retailer_aggregate": {
                "fixture_data": [],
                "retailer_data": []
            },
            "is_google_product": null,
            "inventoryProductId": null,
            "selected_product": null
        },
        {
            "id": 3176880361675808,
            "product_name": "Test ",
            "product_code": "212311212",
            "category": "Pixel",
            "color": "Red",
            "type": "Dummy",
            "familyTypeId": 7805953012884352,
            "year": "2014",
            "familyName": "Nest",
            "typeofProduct": "Dummy",
            "depth": 12,
            "width": 1212,
            "height": 12,
            "numberofPlugs": null,
            "isDemoRequired": null,
            "inputTools": [
                {
                    "quantity": "2",
                    "tab": "title",
                    "title": "T1"
                }
            ],
            "price": null,
            "description": null,
            "created_at": "2023-09-18T06:44:00.218552Z",
            "updated_at": "2023-09-18T06:44:00.296497Z",
            "isSecurityEquipmentRequired": null,
            "instructions": null,
            "additional_info": "asdada",
            "status": "Deplyed in Market",
            "stock": "20",
            "product_image": "product2.png",
            "dialines": [],
            "blob_urls": {
                "product_top_view_images": [],
                "products": [],
                "instructionFiles": []
            },
            "input_tools": "[{'quantity': '2', 'tab': 'title', 'title': 'T1'}]",
            "fixture_retailer_aggregate": {
                "fixture_data": [],
                "retailer_data": []
            },
            "is_google_product": null,
            "inventoryProductId": null,
            "selected_product": null
        },
        {
            "id": 2607407417983391,
            "product_name": "Rd",
            "product_code": "212311212",
            "category": "Pixel",
            "color": "Red",
            "type": "Dummy",
            "familyTypeId": 3893986101827728,
            "year": "2014",
            "familyName": "test",
            "typeofProduct": "Dummy",
            "depth": 12,
            "width": 2,
            "height": 4,
            "numberofPlugs": null,
            "isDemoRequired": null,
            "inputTools": [],
            "price": null,
            "description": null,
            "created_at": "2023-09-15T03:36:17.080046Z",
            "updated_at": "2023-09-15T03:36:17.187706Z",
            "isSecurityEquipmentRequired": null,
            "instructions": null,
            "additional_info": "asdd",
            "status": "Deplyed in Market",
            "stock": "20",
            "product_image": "product2.png",
            "dialines": [
                {
                    "id": 5789589896650832,
                    "productId": 2607407417983391,
                    "name": "Td1",
                    "height": 312,
                    "width": 12,
                    "pdf": []
                }
            ],
            "blob_urls": {
                "product_top_view_images": [],
                "products": [],
                "instructionFiles": []
            },
            "input_tools": "[]",
            "fixture_retailer_aggregate": {
                "fixture_data": [],
                "retailer_data": []
            },
            "is_google_product": null,
            "inventoryProductId": null,
            "selected_product": null
        },
        {
            "id": 434067524660874,
            "product_name": "Test ",
            "product_code": "212311212",
            "category": "Pixel",
            "color": "Resd",
            "type": "Dummy",
            "familyTypeId": 3893986101827728,
            "year": "2011",
            "familyName": "test",
            "typeofProduct": "Dummy",
            "depth": 1,
            "width": 12,
            "height": 12,
            "numberofPlugs": null,
            "isDemoRequired": null,
            "inputTools": [],
            "price": null,
            "description": null,
            "created_at": "2023-09-15T03:29:35.904542Z",
            "updated_at": "2023-09-15T03:29:36.025303Z",
            "isSecurityEquipmentRequired": null,
            "instructions": null,
            "additional_info": "adad",
            "status": "Deplyed in Market",
            "stock": "20",
            "product_image": "product2.png",
            "dialines": [
                {
                    "id": 1929461491107439,
                    "productId": 434067524660874,
                    "name": "Ts",
                    "height": 12,
                    "width": 1,
                    "pdf": []
                }
            ],
            "blob_urls": {
                "product_top_view_images": [],
                "products": [],
                "instructionFiles": []
            },
            "input_tools": "[]",
            "fixture_retailer_aggregate": {
                "fixture_data": [],
                "retailer_data": []
            },
            "is_google_product": null,
            "inventoryProductId": null,
            "selected_product": null
        },
        {
            "id": 1423596288033323,
            "product_name": "test",
            "product_code": "212311212",
            "category": "Pixel",
            "color": "red",
            "type": "Sale (Live) Unit",
            "familyTypeId": 3893986101827728,
            "year": "2020",
            "familyName": "test",
            "typeofProduct": "Sale (Live) Unit",
            "depth": 2,
            "width": 2,
            "height": 2,
            "numberofPlugs": null,
            "isDemoRequired": null,
            "inputTools": [
                {
                    "quantity": "2",
                    "tab": "text",
                    "text": "200"
                }
            ],
            "price": null,
            "description": null,
            "created_at": "2023-09-13T09:49:49.134034Z",
            "updated_at": "2023-10-18T05:35:50.232036Z",
            "isSecurityEquipmentRequired": null,
            "instructions": null,
            "additional_info": "",
            "status": "Deplyed in Market",
            "stock": "20",
            "product_image": "product2.png",
            "dialines": [],
            "blob_urls": {
                "product_top_view_images": [
                    {
                        "upload_id": "7VvmuHAdbfDfBATR8KXisd",
                        "url": "https://10911-googleprojects-grhcopy-ogp9nq7g43u.ws.system-boostudio.com.au/example.appspot.com/tmp_storage/314408919_3183425935240762_6498827821692674528_n_TvQ9JFc.jpg",
                        "type": "",
                        "upload_name": "314408919_3183425935240762_6498827821692674528_n.jpg"
                    }
                ],
                "products": [
                    {
                        "upload_id": "JiL7a9m9tyKCdBBETtTK8c",
                        "url": "https://10911-googleprojects-grhcopy-ogp9nq7g43u.ws.system-boostudio.com.au/example.appspot.com/tmp_storage/314408919_3183425935240762_6498827821692674528_n.jpg",
                        "type": "",
                        "upload_name": "314408919_3183425935240762_6498827821692674528_n.jpg"
                    }
                ],
                "instructionFiles": [
                    {
                        "upload_id": "hECKMXFFY4ZGmo8siHbHxz",
                        "url": "https://10911-googleprojects-grhcopy-ogp9nq7g43u.ws.system-boostudio.com.au/example.appspot.com/tmp_storage/5fb30a950ee0083530eb966a_Dimensions-Digital-Smart-Home-Devices-Google-Nest-H_UsLUhBI.png",
                        "type": "installation",
                        "upload_name": "5fb30a950ee0083530eb966a_Dimensions-Digital-Smart-Home-Devices-Google-Nest-Hub-Max-Back-Top.png"
                    }
                ]
            },
            "input_tools": "[{'quantity': '2', 'tab': 'text', 'text': '200'}]",
            "fixture_retailer_aggregate": {
                "fixture_data": [],
                "retailer_data": []
            },
            "is_google_product": true,
            "inventoryProductId": 53893102220184,
            "selected_product": {
                "id": 53893102220184,
                "product_name": "Google Tshirt Grey S [B-2A]",
                "product_code": "6205",
                "product_image": "https://boogroup.eprintsoftware.com/store/accounts/ImageHandler.ashx?ImageName=m_6205_google_t-shirt_grey.jpg&type=p&aid=289&cid=2144",
                "sku": "P000038",
                "stock": 45,
                "category": "Security Equipment",
                "warehouse_name": "BOOStudio Warehouse",
                "added_to_stock": true,
                "is_hidden": false,
                "created_at": "2023-10-17T05:54:23.691Z",
                "updated_at": "2023-10-17T06:24:32.579Z"
            }
        }
    ]
}
        }
        }
    }

</script>
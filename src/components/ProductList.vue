<script setup>
import {RouterLink,RouterView } from 'vue-router'
import axios from 'axios'
import {ref, onBeforeMount, reactive} from 'vue'
import {useProduct} from "../stores/productStore.js";
import {storeToRefs} from "pinia";

const pro=useProduct();

const {products,singleProduct} = storeToRefs(pro);

onBeforeMount(() => {
 pro.getData();
});


// onBeforeMount(() => {
//   axios.get('https://dummyjson.com/products')
//       .then(res => {
//         products.value = res.data.products
//       })
// });


const detailsBtn =
    "text-right border border-lime-600 font-semibold transition duration-200 rounded-sm py-1 px-3 text-lime-600 hover:shadow-xl";




const Header = [
  { text: "Category", value: "category" },
  { text: "Brand", value: "brand" },
  { text: "Image", value:"thumbnail"},
  { text: "Name", value: "title", sortable: true },
  { text: "Price (Tk)", value: "price", sortable: true },
  { text: "Stock", value: "stock"},
  { text: "Rating", value: "img "},
  { text: "Action", value: "id"}
];


function itemView(id){

  pro.getSingleProductDetails(id);

}



const searchField = ["Category","Brand","Image","Name","Price","Stock", "Rating"];

const searchValue = ref();


</script>
<template>

  <div class="md:container md:mx-auto">
  <h6 class=" md:text-4xl  pb-2 text-center"> Products </h6>
  <div class="h-1 bg-lime-600 w-52 mx-auto my-3"></div>


  <input placeholder="Search..." class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" v-model="searchValue">

  <EasyDataTable :headers="Header" :items="products" :rows-per-page="10" :search-field="searchField"  :search-value="searchValue">
    <template #item-thumbnail="{thumbnail}" >
      <img :src="thumbnail" alt="" class="custom">
    </template>

    <template #item-id="{id}">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" @click="itemView(id)">View</button>
    </template>

  </EasyDataTable>

</div>

</template>

<style scoped>
.custom{
  height:60px;
  width:60px;
}

</style>






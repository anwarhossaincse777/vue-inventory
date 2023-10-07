<script setup>
import { onMounted} from "vue";
import { useRoute } from "vue-router";

const productId = useRoute().params.id;

import {useProduct} from "../stores/productStore.js";
import {storeToRefs} from "pinia";
const pro=useProduct();

const {singleProduct} = storeToRefs(pro);

onMounted(() => {
  pro.getSingleProductDetails(productId)

});

</script>

<template>
  <div class="container mx-auto md:p-10 p-5">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <img :src="singleProduct.thumbnail" class="" alt=""/>

        <div class="grid grid-cols-4 items-center gap-3 mt-4">

          <div
              class="border rounded bg-lime-100 cursor-pointer p-3"
              v-for="(image, index) in singleProduct.images"
              :key="index"
          >
            <img
                :src="image"
                class="h-32 mx-auto"
                alt=""
            />
          </div>
        </div>
      </div>
      <div class="md:flex-1 px-4">
        <h2
            class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl"
        >
          {{ singleProduct.description }}
        </h2>
        <p class="text-gray-500 text-sm">
          By
          <a href="#" class="text-lime-600 hover:underline">{{ singleProduct.title }}</a>
        </p>

        <div class="flex items-center space-x-4 my-4">
          <div>
            <div class="rounded-lg bg-gray-100 flex py-2 px-3">
              <span class="text-lime-400 mr-1 mt-1">$</span>
              <span class="font-bold text-lime-600 text-3xl">{{ singleProduct.price }}</span>
            </div>
          </div>
          <div class="flex-1">
            <p class="text-green-500 text-xl font-semibold">Save {{ singleProduct.discountPercentage }}%</p>
            <p class="text-gray-400 text-sm">Inclusive of all Taxes.</p>
          </div>
        </div>

        <p class="text-gray-500">
          {{ singleProduct.description }}
        </p>

        <div class="flex py-4 space-x-4">
          <button
              type="button"
              class="px-6 py-2 font-semibold rounded-xl bg-lime-600 hover:bg-green-500 text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

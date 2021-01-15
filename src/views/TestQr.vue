<template>
  <v-container grid-list-xs>
    <div>
      <label>รหัสสินค้า</label>
      <v-text-field
            v-model="orderId" 
            label="order id"
            required
          ></v-text-field>
      <label>จำนวนเงินที่ต้องชำระ</label>
      <v-text-field
            v-model="amount"
            label="Amount"
            required
          ></v-text-field>
      <v-btn type="button" @click="createQr">ชำระเงิน</v-btn>
    </div>
    <v-divider></v-divider>
    <v-img :src="qrImage"></v-img>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      orderId : "",
      amount : "",
      qrImage : ""
    };
  },
  methods: {
    createQr() {
      //get Token
      axios({
        method: 'post', //you can set what request you want to be
        url: 'https://api-sandbox.partners.scb/partners/sandbox/v1/oauth/token',
        headers: {
          "Content-Type" : 'application/json',
          "resourceOwnerId" : "l788ac6595ad884384af1413fae7462b97",
          "requestUId" : "0123456789",
          "accept-language" : "EN"
        },
        data: {
          "applicationKey" : "l788ac6595ad884384af1413fae7462b97",
          "applicationSecret" : "14484e1d4356443484c410c71cb55462"
        }
      })
      .then((response) => this.generatedQr(response.data.data.accessToken))
      .catch(console.error());
    },
    generatedQr(token){
      console.log(token)
      //Generate Qr Code
      axios({
        method: 'post', //you can set what request you want to be
        url: 'https://api-sandbox.partners.scb/partners/sandbox/v1/payment/qrcode/create',
        headers: {
          "Content-Type" : 'application/json',
          "authorization" : "Bearer " + token,
          "resourceOwnerId" : "l788ac6595ad884384af1413fae7462b97",
          "requestUId" : "0123456789",
          "accept-language" : "EN",
          "Access-Control-Allow-Origin" : "*",
          'Access-Control-Allow-Methods' : 'POST, GET, PUT, PATCH, DELETE, OPTIONS',
          'Access-Control-Allow-Headers' : 'Content-Type, Option, Authorization'
        },
        data: {
         "qrType": "PP", 
         "ppType": "BILLERID", 
         "ppId": "024924483846659", 
         "amount": this.amount, 
         "ref1": this.orderId, 
         "ref2": this.orderId, 
         "ref3": "RKZ" 
        }
      })
      .then((response) => this.qrImage = response.data.data.qrImage)
      .catch((response) => console.log(response.data));
    }
  },
};
</script>

<style>
</style>
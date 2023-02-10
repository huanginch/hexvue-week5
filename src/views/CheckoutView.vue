<template>
  <div class="checkout container">
    <Form @submit="onSubmit" v-slot="{ errors }">
      <div class="row mb-3">
        <div class="col-6">
          <label for="name" class="form-label">訂購人姓名</label>
          <Field
            id="name"
            name="name"
            type="text"
            class="form-control"
            rules="required"
            v-model="user.name"
            :class="{
              'is-invalid': errors['name'],
              'is-valid': !errors['name'] && user.name,
            }"
            placeholder="請輸入姓名"
          ></Field>
          <error-message name="name" class="invalid-feedback"></error-message>
        </div>
        <div class="col-6">
          <label for="tel" class="form-label">訂購人電話</label>
          <Field
            id="tel"
            name="tel"
            type="tel"
            class="form-control"
            rules="min:8|numeric|required"
            v-model="user.tel"
            :class="{
              'is-invalid': errors['tel'],
              'is-valid': !errors['tel'] && user.tel,
            }"
            placeholder="請輸入電話"
          ></Field>
          <error-message name="tel" class="invalid-feedback"></error-message>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-6">
          <label for="email" class="form-label">訂購人Email</label>
          <Field
            id="email"
            name="email"
            type="email"
            class="form-control"
            rules="email|required"
            v-model="user.email"
            :class="{
              'is-invalid': errors['email'],
              'is-valid': !errors['email'] && user.email,
            }"
            placeholder="請輸入 Email"
          ></Field>
          <error-message name="email" class="invalid-feedback"></error-message>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-">
          <label for="address" class="form-label">地址</label>
          <Field
            id="address"
            name="address"
            type="text"
            class="form-control"
            rules="required"
            v-model="user.address"
            :class="{
              'is-invalid': errors['address'],
              'is-valid': !errors['address'] && user.address,
            }"
            placeholder="請輸入地址"
          ></Field>
          <error-message
            name="address"
            class="invalid-feedback"
          ></error-message>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div>
            <h3>商品內容</h3>
            <table class="table text-white">
              <thead>
                <tr>
                  <th scope="col">商品名稱</th>
                  <th scope="col">數量</th>
                  <th scope="col">商品價格</th>
                  <th scope="col">小計</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="cartItem in carts" :key="cartItem.id">
                  <td>{{ cartItem.product.title }}</td>
                  <td>{{ cartItem.qty }}</td>
                  <td>$NT {{ cartItem.product.price }}</td>
                  <td>$NT {{ cartItem.final_total }}</td>
                </tr>
              </tbody>
            </table>
            <p class="text-end">總價格: $NT {{ final_total }}</p>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-12 col-lg-8">
          <label for="message" class="mb-2">備註</label>
          <textarea
            v-model="message"
            id="message"
            name="message"
            class="form-control"
            rows="3"
          ></textarea>
        </div>
      </div>
      <button class="btn btn-primary float-end mb-2" type="submit">
        送出訂單
      </button>
    </Form>
  </div>
  <MyLoading v-model:active="isLoading"></MyLoading>
</template>

<script>
import { Form, Field, ErrorMessage, defineRule, configure } from "vee-validate";
import { required, email, min, numeric } from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import zhTW from "../../json/zh_TW.json";

import cartStore from "../stores/cartStore";
import { mapActions, mapState } from "pinia";

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);
defineRule("numeric", numeric);
configure({
  // Generates an English message locale generator
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale("zh_TW");

export default {
  name: "CheckoutView",
  data() {
    return {
      user: {
        name: "",
        email: "",
        tel: "",
        address: "",
      },
      message: "",
      isLoading: false,
    };
  },
  computed: {
    ...mapState(cartStore, ["carts", "final_total"]),
  },
  methods: {
    onSubmit() {
      this.isLoading = true;
      const data = {
        user: this.user,
        message: this.message,
      };
      this.$http
        .post(
          "https://vue3-course-api.hexschool.io/v2/api/int-hexschool/order",
          { data }
        )
        .then((res) => {
          //清空購物車
          this.getCart();
          //關閉 loading
          this.isLoading = false;
          //顯示訊息
          alert(res.data.message);
          //清空表單
          this.user = {
            name: "",
            email: "",
            tel: "",
            address: "",
          };
          this.message = "";
          //回到首頁
          this.$router.push("/");
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    ...mapActions(cartStore, ["getCart"]),
  },
  components: {
    Form,
    Field,
    ErrorMessage,
  },
};
</script>

<style>
.checkout {
  margin-top: 70px;
}
</style>

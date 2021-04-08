<template>
  <div class="register-form formContainer">
    <form @submit="handleSubmit">
      <p class="h4 text-center mb-4">Register</p>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="fname" class="grey-text">First Name</label>
          <input
            class="form-control"
            type="text"
            name="fname"
            id="fname"
            @change="fnameChange"
            v-model="fname"
            required
            autofocus
          />
          <p
            v-if="error['fnameError']"
            style="color: red; margin-top: 5px; margin-bottom: 0px"
          >
            Please check your First Name
          </p>
        </div>
        <div class="form-group col-md-6">
          <label for="lname" class="grey-text">Last Name</label>
          <input
            class="form-control"
            type="text"
            id="lname"
            name="lname"
            @change="lnameChange"
            v-model="lname"
            required
            autofocus
          />
          <p
            v-if="error['lnameError']"
            style="color: red; margin-top: 5px; margin-bottom: 0px"
          >
            Please check your Last Name
          </p>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="email" class="grey-text">Your email</label>
          <input
            class="form-control"
            type="email"
            id="email"
            name="email"
            v-model="email"
            required
            autofocus
          />
        </div>
        <div class="form-group col-md-6">
          <label for="pincode" class="grey-text">Pincode</label>
          <input
            class="form-control"
            type="number"
            name="pincode"
            id="pincode"
            @change="pinChange"
            v-model="pincode"
            required
          />
          <p
            v-if="error['pincodeError']"
            style="color: red; margin-top: 5px; margin-bottom: 0px"
          >
            Please check your Pincode
          </p>
        </div>
      </div>
      <div class="form-row">
        <label for="address" class="grey-text">Address</label>
        <textarea
          class="form-control"
          id="address"
          name="address"
          v-model="address"
          required
          autofocus
        />
      </div>
      <br />
      <div class="form-row">
        <label for="image" class="grey-text">Image</label>
        <input
          class="form-control"
          type="file"
          id="image"
          @change="onFileChange"
          required
        />
      </div>
      <div id="preview">
        <img v-if="imageUrl" :src="imageUrl" />
      </div>
      <div class="mt-4">
        <div class="form-row">
          <div class="form-group col-md-6">
            <input class="btn btn-indigo" type="submit" value="Register" />
          </div>
          <div class="form-group col-md-6">
            <input
              class="btn btn-indigo"
              type="reset"
              name="clear"
              @click="clearError"
              value="Clear"
            />
          </div>
        </div>
        <p>Already have an account? <a href="/">Login</a></p>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fname: "",
      lname: "",
      email: "",
      address: "",
      pincode: 100001,
      imageUrl: null,
      error: {
        fnameError: false,
        lnameError: false,
        pincodeError: false,
      },
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      if (
        !this.error["fnameError"] &&
        !this.error["lnameError"] &&
        !this.error["pincodeError"]
      ) {
        alert("Form Submitted Successfully");
      }
    },
    clearError() {
      this.error["fnameError"] = false;
      this.error["lnameError"] = false;
      this.error["pincodeError"] = false;
      this.imageUrl = null;
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.imageUrl = URL.createObjectURL(file);
    },
    fnameChange(e) {
      if (!/\d/.test(e.target.value)) {
        this.error["fnameError"] = false;
      }
      if (/\d/.test(e.target.value)) {
        this.error["fnameError"] = true;
      }
    },
    lnameChange(e) {
      if (!/\d/.test(e.target.value)) {
        this.error["lnameError"] = false;
      }
      if (/\d/.test(e.target.value)) {
        this.error["lnameError"] = true;
      }
      console.log(this.error["lnameError"]);
    },
    pinChange(e) {
      if (e.target.value > 999999 || e.target.value < 100000) {
        this.error["pincodeError"] = true;
      } else {
        this.error["pincodeError"] = false;
      }
    },
  },
};
</script>

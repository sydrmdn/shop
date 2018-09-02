<template>
  <div class="columns">
    <div class="column is-4 is-offset-4">
      <form @submit.prevent="saveProduct">

        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input type="text" class="input" v-model="model.name" name="name">
          </div>
        </div>

        <div class="field">
          <label class="label">Price</label>
          <div class="control">
            <input type="number" class="input" v-model="model.price" name="price">
          </div>
        </div>

        <div class="field">
          <label class="label">Manufacturer</label>
          <div class="control">
            <div class="select is-rounded">
              <select type="text" class="input" v-model="model.manufacturer" name="manufacturer">
              <template v-for="manufacturer in manufacturers">
                <option :value="manufacturer._id" :key="manufacturer._id" :selected="manufacturer._id == (model.manufacturer && model.manufacturer._id)">{{manufacturer.name}}</option>
              </template>
              </select>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Image</label>
          <div class="control">
            <input type="text" class="input" v-model="model.image" name="image">
          </div>
        </div>

        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <textarea class="input" v-model="model.description" name="description"></textarea>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <button class="button is-primary is-fullwidth">
              <!-- Conditional rendering for input text -->
              <span v-if="isEditing">Update Product</span>
              <span v-else>Add Product</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>

</template>

<script>
export default {
  props: ['model', 'manufacturers', 'isEditing'],
  methods: {
    saveProduct () {
      this.$emit('save-product', this.model)
    }
  }
}

</script>

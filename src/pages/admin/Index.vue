<template>
  <div>

    <div class="tabs is-centered">
      <ul>
        <router-link to="/admin" tag="li" exact>
          <a>
            <span class="icon is-small"><i class="material-icons">local_florist</i></span>
            <span>Product</span>
          </a>
        </router-link>
        <router-link to="/admin/new" tag="li" exact>
          <a>
            <span class="icon is-small"><i class="material-icons">add_circle</i></span>
            <span>Add</span>
          </a>
        </router-link>
      </ul>
    </div>

    <!-- Outlet for children routes -->
    <router-view></router-view>
  </div>
</template>

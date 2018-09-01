<template>
  <div>
    <div>
      <ul>
        <!-- Links are to sibling routes -->
        <li>
          <router-link to="/admin">View Products</router-link>
        </li>
        <li>
          <router-link to="/admin/new">New Product</router-link>
        </li>
      </ul>
    </div>
    <!-- Outlet for children routes -->
    <router-view></router-view>
  </div>
</template>

<template>
  <div class="home">
    <div id="bg" class="w-100 p-3"></div>
      <main>
        <section>
          <div class="container vertical-center">
            <div class="row mx-auto">
              <div class="col-lg-6 col-md-8 col-sm-12 mx-auto">
                <div class="jumbotron">
                  <h1 class="display text-center">Welcome!</h1>
                  <p class="lead text-center">This is a simple To-Do list app</p>
                  <hr class="my-4">
                  <p class="text-center">Click here to load current Open Issues that are in progress and might need a hand.</p>
                  <p class="lead mt-lg-5 mt-md-4 d-flex justify-content-center">
                    <router-link class="nav-link btn btn-primary btn-lg" active-class="active" to="/OpenIssues">I'm Ready</router-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  </div>
</template>

<script>
  // @ is an alias to /src
  //import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'Home',
    components: {
      //HelloWorld,
    }
  }
</script>

<template>
    <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light float-right" id="navbar-color">
        <router-link class="navbar-brand hvr-float-shadow nav-link" active-class="active" to="/">To-Dos</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-lg-end " id="navbarNav">
            <ul class="navbar-nav ">
                <li class="nav-item active hvr-underline-from-left mr-lg-5">
                    <router-link class="nav-link" active-class="active" to="/OpenIssues">Open Issues</router-link>
                </li>
                <li class="nav-item active hvr-underline-from-left mr-lg-5">
                    <router-link class="nav-link" active-class="active" to="/DoneIssues">Done Issues</router-link>
                </li>
                <li class="nav-item active hvr-underline-from-left mr-lg-5">
                    <router-link class="nav-link" active-class="active" to="/TrashedIssues">Trashed Issues</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>


</style>
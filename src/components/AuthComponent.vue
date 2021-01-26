<template>
    <div class="page page_onboarding">
        <div class="container">
            <h1 class="page__title text-center">
                <slot name="header" />
            </h1>
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'AuthComponent',
}
</script>

<style>

</style>
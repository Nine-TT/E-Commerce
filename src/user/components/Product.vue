<template >
    <div class="product_container">
        <div class="page_sort">
            <div>
                <a-input-group compact class="sort_group">
                    <span class="sort_group--name">sort by:</span>
                    <a-select v-model:value="value_option">
                        <a-select-option value="Option1-1">Option1-1</a-select-option>
                        <a-select-option value="Option1-2">Option1-2</a-select-option>
                    </a-select>
                </a-input-group>
            </div>
           
            <span>view</span>
        </div>
        <div class="product"></div>
        <div class="pagning"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value_option: 'Option1-1'
        }
    },
}
</script>
<style scoped>
    .page_sort {
        border: 1px solid red;
        display: flex;
    }
    .product_container {
        width: 100%;
        max-width: 1440px;
        height: 400px;
        
        margin: 0 auto;
    }

    .sort_group {
        border: 1px solid green;
        display: flex;
        align-items: center;
    }

    .sort_group--name {
        font-size: 18px;
    }


</style>
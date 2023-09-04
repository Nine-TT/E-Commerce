<template lang="">
    <div class="constainer">
        <div class="header">
            <div class="conatiner-left">
                <div class="logo-header">
                    ttc store
                </div>
    
                <div>
                    <ul>
                        <li enter-active-class="active" v-for="(item, index) in listMenu" :key="index"> 
                            <component :is="item.icon"/>

                            <router-link :to="item.path" class="listMenu">
                               
                               
                                {{item.name}}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
    
        </div>
    </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue';
import { AreaChartOutlined, UnorderedListOutlined, SolutionOutlined, BookOutlined } from '@ant-design/icons-vue';

const value = ref < string > ('');

let listMenu = [
    {
        name: 'Thống kê',
        path: '/admin',
        icon: 'AreaChartOutlined'
    },

    {
        name: 'Sản Phẩm',
        path: '/admin/product',
        icon: 'UnorderedListOutlined'
    },

    {
        name: 'Người dùng',
        path: '/admin/user',
        icon: 'SolutionOutlined'
    },

    {
        name: 'Bài viết',
        path: '/admin/blog',
        icon: 'BookOutlined'
    },

]

const onSearch = (searchValue: string) => {
    console.log('use value', searchValue);
    console.log('or use this.value', value.value);
    value.value = '';
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Chokokutai&family=Poppins:wght@200;400&display=swap');
:root {
    --text-font-family: 'Chokokutai', cursive;
}

.constainer {
    width: 240px;
    height: 100vh;
    text-align: center;
    background-color: #3c5398;
    font-size: 24px;
    .header {
        text-align: center;
        .conatiner-left {
            .logo-header {
                margin: 0 auto;
                
            }
        }
        
        .logo-header {
            text-transform: uppercase;
            color: #eeee;
            margin-right: 80px;
            border-bottom: 1px solid #000;
            padding: 30px 0;
            font-family: var(--text-font-family);
        }
        margin: 0 auto;
        ul {
            
            li {
                list-style-type: none;
                cursor: pointer;
                text-transform: capitalize;
                
                font-size: 20px;
                margin: 15px 0;
                font-family: 'Poppins', sans-serif;
                
                &:hover {
                    color: #40BFFF;
                }

                .listMenu {
                    color: #ccc;
                    text-decoration: none;
                    font-size: 16px;
                }

                a {
                    margin: 15px 0;
                    &:hover {
                        color: #40BFFF;
                    }
                }
            }

            .active {
                color: #40BFFF;
            }
        }
    }
}

@media (min-width:320px) {
    /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
}

@media (min-width:480px) {
    /* smartphones, Android phones, landscape iPhone */
}

@media (min-width:600px) {
    /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */
}

@media (min-width:801px) {
    /* tablet, landscape iPad, lo-res laptops ands desktops */
}

@media (min-width:1025px) {
    /* big landscape tablets, laptops, and desktops */
}

@media (min-width:1281px) {
    /* hi-res laptops and desktops */
}
</style>
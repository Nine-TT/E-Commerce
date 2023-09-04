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
                            <router-link :to="item.path" class="listMenu">{{item.name}}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="container-right">
                <div class="search">
                    <a-input-search v-model:value="value" placeholder="Tìm tên sản phẩm" enter-button @search="onSearch" class="input-search"/>
                </div>
                
                <div class="profile">
                    <user-outlined />
                </div>

                <div class="cart">
                    <ShoppingCartOutlined/>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue';
import { ShoppingCartOutlined, UserOutlined} from '@ant-design/icons-vue';

const value = ref < string > ('');

let listMenu = [{
        name: 'Sản Phẩm',
        path: "/admin"
    },

    {
        name: 'Người dùng',
        path: '/admin/user'
    },

    {
        name: 'Bài viết',
        path: "/admin/blog"
    },

]

const onSearch = (searchValue: string) => {
    console.log('use value', searchValue);
    console.log('or use this.value', value.value);
    value.value = '';
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Chokokutai&family=Poppins:wght@200;400&display=swap');
:root {
    --text-font-family: 'Chokokutai', cursive;
}

.constainer {
    width: 100%;
    background-color: #eeee;
    font-size: 24px;
    .header {
        .conatiner-left {
            display: flex;
            align-items: center;
            .logo-header {
                font-family: var(--text-font-family);
            }
        }
        .container-right {
            display: flex;
            width: 500px;
            // max-width: 500px;
            justify-content: space-around;

            .search {
                .input-search {
                    width: 400px;
                }
            }


            .cart {
                color: #000;
                cursor: pointer;
            }

            .profile {
                cursor: pointer;
            }
        }
        .logo-header {
            text-transform: uppercase;
            color: #000;
            margin-right: 80px;
        }
        margin: 0 auto;
        padding: 30px 0;
        display: flex;
        justify-content: space-between;
        max-width: 1440px;
        ul {
            display: flex;
            li {
                list-style-type: none;
                cursor: pointer;
                text-transform: uppercase;
                font-size: 20px;
                margin: 0 15px;
                font-family: 'Poppins', sans-serif;
                color: #000;
                &:hover {
                    color: #40BFFF;
                }

                .listMenu {
                    color: #000;
                    text-decoration: none;
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
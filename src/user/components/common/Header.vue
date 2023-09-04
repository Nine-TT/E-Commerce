<template lang="">
    <div class="constainer">
        <div class="header">
            <div class="conatiner-left">
                <div class="logo-header" @click="redirectToHome">

                    Hekto
                </div>
    
                <div class="navbar_menu">
                    <ul>
                        <li  v-for="(item, index) in listMenu" :key="index" class="router_container"> 
                            <router-link  :to="item.path"  exactActiveClass="active_navbar" >{{item.name}}</router-link>
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


<script setup>
import { ref } from 'vue';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons-vue';

const value = ref('');

let listMenu = [{
        name: 'Trang chủ',
        path: "/"
    },

    {
        name: 'Sản phẩm',
        path: '/product'
    },

    {
        name: 'Bài viết',
        path: "/blog"
    },

    {
        name: 'Liên hệ',
        path: '/contact'

    }
]

const onSearch = () => {
    console.log('use value', searchValue);
    console.log('or use this.value', value.value);
    this.value.value = '';
};


const redirectToHome = () => {
    alert("click oke")
   this.$router.push({path: '/'});
}

</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;600&display=swap');
:root {
    --text-header-font: 'Josefin Sans', sans-serif;
    --text-header-color: #0D0E43;
}

.router_container a {
    color: #000;
}

.router_container a:hover {
    color: #FB2E86;
    opacity: .5;
}

.constainer {
    width: 100%;
    background-color: #eeee;
    font-size: 24px;

    .active_navbar {
        color: #FB2E86;
    }
    .header {
        .conatiner-left {
            display: flex;
            align-items: center;
            .logo-header {
                font-family:  'Josefin Sans', sans-serif;
                --text-header-color: #0D0E43;
                margin-right: 80px;
                font-size: 44px;
                color: var(--text-header-color);
                &:hover {
                    cursor: pointer;
                }
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
                font-family:  'Josefin Sans', sans-serif;
                color: #000;
                &:hover {
                    color: #FB2E86;
                }

                a {
                    text-decoration: none;
                }
            }

            
        }
    }
}

@media (min-width:320px) {
    /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
    .constainer .header .container-right {
        display: none;
    }

    .navbar_menu {
        display: none;
    }

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
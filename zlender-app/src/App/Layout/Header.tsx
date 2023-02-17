import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
// import { IoHeartOutline } from "react-icons/io5";
import { IoHeartOutline, IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram, IoCaretBackCircleOutline, IoPersonOutline, IoSearchOutline, IoBagHandleOutline,
  IoMenuOutline, IoHomeOutline, IoGridOutline, IoCloseOutline, IoAddOutline, IoRemoveOutline } from "react-icons/io5";
// import { AddOutline, BagHandleOutline, CaretBackCircleOutline, CloseOutline, HeartOutline, LogoFacebook, LogoInstagram, LogoLinkedin, LogoTwitter, MenuOutline, PersonOutline, RemoveOutline, Search } from "react-ionicons";
// import GridOutline from "react-ionicons/lib/GridOutline";
// import HomeOutline from "react-ionicons/lib/HomeOutline";
import Log from '../../../public/images/logo.png'
import { NavLink } from "react-router-dom";
import './header.scss';

interface Props{
    darkMode: boolean;
    handleThemeChange: () => void;
}

const midLinks = [
    {title: 'catalog', path: '/catalog'},
    {title: 'about', path: '/about'},
    {title: 'contact', path: '/contact'},
]

const rightLinks = [
    {title: 'login', path: '/login'},
    {title: 'register', path: '/register'},
]

export default function Header({darkMode, handleThemeChange}: Props){

  useEffect(() => {
    const mobileMenuOpenBtn = document.getElementsByClassName("data-mobile-menu-open-btn");
    const mobileMenu = document.getElementsByClassName("data-mobile-menu");
    const mobileMenuCloseBtn = document.getElementsByClassName("data-mobile-menu-close-btn");
    const overlay = document.getElementById("data-overlay");

    // Array.from(mobileMenuOpenBtn).forEach((element, index) => {

    //   const mobileMenuCloseFunc = function() {
    //     element.classList.remove('active');
    //     overlay?.classList.remove('active');
    //   }

    //   element.addEventListener('click', function(){
    //     mobileMenu[index].classList.add('active');
    //     overlay?.classList.add('active');
    //   });

    //   mobileMenuCloseBtn[index].addEventListener('click', mobileMenuCloseFunc);
    //   overlay?.addEventListener('click', mobileMenuCloseFunc);
    // });

    for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

    // mobile menu function
    const mobileMenuCloseFunc = function () {
        mobileMenu[i].classList.remove('active');
       if(overlay){ overlay.classList.remove('active'); }
    }
    
    mobileMenuOpenBtn[i].addEventListener('click', function () {
        mobileMenu[i].classList.add('active');
        if(overlay){ overlay.classList.add('active'); }
    });

    mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
    if(overlay){ overlay.addEventListener('click', mobileMenuCloseFunc); }

    }

  }, []);

    // // mobile menu variables
    // const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
    // const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
    // const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
    // const overlay = document.querySelector('[data-overlay]');

    // for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

    // // mobile menu function
    // const mobileMenuCloseFunc = function () {
    //     mobileMenu[i].classList.remove('active');
    //    if(overlay){ overlay.classList.remove('active'); }
    // }

    // mobileMenuOpenBtn[i].addEventListener('click', function () {
    //     mobileMenu[i].classList.add('active');
    //     if(overlay){ overlay.classList.add('active'); }
    // });

    // mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
    // if(overlay){ overlay.addEventListener('click', mobileMenuCloseFunc); }

    // }

    // // accordion variables
    // const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
    // const accordion = document.querySelectorAll('[data-accordion]');

    // for (let i = 0; i < accordionBtn.length; i++) {

    // accordionBtn[i].addEventListener('click', function () {

    //     const clickedBtn = this.nextElementSibling.classList.contains('active');

    //     for (let i = 0; i < accordion.length; i++) {

    //     if (clickedBtn) break;

    //     if (accordion[i].classList.contains('active')) {

    //         accordion[i].classList.remove('active');
    //         accordionBtn[i].classList.remove('active');

    //     }

    //     }

    //     this.nextElementSibling.classList.toggle('active');
    //     this.classList.toggle('active');

    // });

    // }

    // const Accordion: React.FC = () => {


        // const accordionBtn = useRef<HTMLCollectionOf<Element>>(
        //   document.getElementsByClassName('data-accordion-btn')
        // );
        // const accordion = useRef<HTMLCollectionOf<Element>>(
        //   document.getElementsByClassName('data-accordion')
        // );
      
        // useEffect(() => {
        //   Array.from(accordionBtn.current).forEach((btn, i) => {
        //     btn.addEventListener('click', () => {
        //       const v = btn.nextElementSibling;
        //       let clickedBtn = false;
        //       if (v != null) { clickedBtn = v.classList.contains('active') }
        //       Array.from(accordion.current).forEach((item, i) => {
        //         if (clickedBtn) return;
        //         if (item.classList.contains('active')) {
        //           item.classList.remove('active');
        //           btn.classList.remove('active');
        //         }
        //       });
        //       if(btn.nextElementSibling != null){
        //       btn.nextElementSibling.classList.toggle('active');}
        //       btn.classList.toggle('active');
        //     });
        //   });
        // }, []);

    return(
        <>
            <div className="overlay" id="data-overlay"></div>
            <AppBar position="static" sx={{mb: 4}}>
            <Toolbar sx={{display: 'flex', justifyContent:'space-between', alignItems:'center'}}>
            
            <Box display='flex' alignItems='center'>
            <Typography variant='h6' component={NavLink} to='/' exact
            sx={{color: 'inherit', textDecoration: 'none'}}
            >
                Hwllo
            </Typography>
            <Switch checked={darkMode} onChange={handleThemeChange}/>
            </Box>
            
            <List sx={{display: 'flex'}}>
                {midLinks.map(({title, path}) => (
                    <ListItem
                        component={NavLink}
                        to={path}
                        key={path}
                        sx={{
                            color: 'inherit',
                            typography: 'h6',
                            '&:hover': {
                                color: 'grey.500'
                            },
                            '&.active': {
                                color: 'text.secondary'
                            }
                        }}
                    >
                        {title.toUpperCase()}
                    </ListItem>
                ))}
            </List>

            <Box display='flex' alignItems='center'>

            <IconButton size='large' sx={{color: 'inherit'}}>
                <Badge badgeContent={4} color='secondary'>
                    <ShoppingCart />
                </Badge>
            </IconButton>

            <List sx={{display: 'flex'}}>
                {rightLinks.map(({title, path}) => (
                    <ListItem
                        component={NavLink}
                        to={path}
                        key={path}
                        sx={{color: 'inherit', typography: 'h6'}}
                    >
                        {title.toUpperCase()}
                    </ListItem>
                ))}
            </List>
            </Box>

            </Toolbar>
            </AppBar>

<header>

<div className="header-top">

  <div className="container">

    <ul className="header-social-container">

      <li>
        <a href="#" className="social-link">
            <IoLogoFacebook className='ion-icon'/>
        </a>
      </li>

      <li>
        <a href="#" className="social-link">
            <IoLogoTwitter className='ion-icon'/>
        </a>
      </li>

      <li>
        <a href="#" className="social-link">
            <IoLogoInstagram className='ion-icon'/>
        </a>
      </li>

      <li>
        <a href="#" className="social-link">
            <IoLogoLinkedin className='ion-icon'/>
        </a>
      </li>

    </ul>

    <div className="header-alert-news">
      <p>
        <b>Free Shipping</b>
        This Week Order Over - $55
      </p>
    </div>

    <div className="header-top-actions">

      <select name="currency">

        <option value="usd">USD $</option>
        <option value="eur">EUR &euro;</option>

      </select>

      <select name="language">

        <option value="en-US">English</option>
        <option value="es-ES">Espa&ntilde;ol</option>
        <option value="fr">Fran&ccedil;ais</option>

      </select>

    </div>

  </div>

</div>

<div className="header-main">

  <div className="container">

    <a href="#" className="header-logo">
      <img src="http://picsum.photos/200" alt="Zlender logo" width="120" height="36" />
    </a>

    <div className="header-search-container">

      <input type="search" name="search" className="search-field" placeholder="Enter your product name..." />

      <button className="search-btn">
        <IoSearchOutline className="ion-icon" />
      </button>

    </div>

    <div className="header-user-actions">

      <button className="action-btn">
        <IoPersonOutline  className="ion-icon"/>
      </button>

      <button className="action-btn">
        <IoHeartOutline className="ion-icon" />
        <span className="count">0</span>
      </button>

      <button className="action-btn">
        <IoBagHandleOutline className="ion-icon"/>
        <span className="count">0</span>
      </button>

    </div>

  </div>

</div>

<nav className="desktop-navigation-menu">

  <div className="container">

    <ul className="desktop-menu-category-list">

      <li className="menu-category">
        <a href="#" className="menu-title">Home</a>
      </li>

      <li className="menu-category">
        <a href="#" className="menu-title">Categories</a>

        <div className="dropdown-panel">

          <ul className="dropdown-panel-list">

            <li className="menu-title">
              <a href="#">Electronics</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Desktop</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Laptop</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Camera</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Tablet</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Headphone</a>
            </li>

            <li className="panel-list-item">
              <a href="#">
                <img src="http://picsum.photos/200" alt="headphone collection" width="250"
                  height="119" />
              </a>
            </li>

          </ul>

          <ul className="dropdown-panel-list">

            <li className="menu-title">
              <a href="#">Men's</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Formal</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Casual</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Sports</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Jacket</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Sunglasses</a>
            </li>

            <li className="panel-list-item">
              <a href="#">
                <img src="http://picsum.photos/200" alt="men's fashion" width="250" height="119" />
              </a>
            </li>

          </ul>

          <ul className="dropdown-panel-list">

            <li className="menu-title">
              <a href="#">Women's</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Formal</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Casual</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Perfume</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Cosmetics</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Bags</a>
            </li>

            <li className="panel-list-item">
              <a href="#">
                <img src="http://picsum.photos/200" alt="women's fashion" width="250" height="119" />
              </a>
            </li>

          </ul>

          <ul className="dropdown-panel-list">

            <li className="menu-title">
              <a href="#">Electronics</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Smart Watch</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Smart TV</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Keyboard</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Mouse</a>
            </li>

            <li className="panel-list-item">
              <a href="#">Microphone</a>
            </li>

            <li className="panel-list-item">
              <a href="#">
                <img src="http://picsum.photos/200" alt="mouse collection" width="250" height="119" />
              </a>
            </li>

          </ul>

        </div>
      </li>

      <li className="menu-category">
        <a href="#" className="menu-title">Men's</a>

        <ul className="dropdown-list">

          <li className="dropdown-item">
            <a href="#">Shirt</a>
          </li>

          <li className="dropdown-item">
            <a href="#">Shorts & Jeans</a>
          </li>

          <li className="dropdown-item">
            <a href="#">Safety Shoes</a>
          </li>

          <li className="dropdown-item">
            <a href="#">Wallet</a>
          </li>

        </ul>
      </li>

      <li className="menu-category">
        <a href="#" className="menu-title">Women's</a>

        <ul className="dropdown-list">

          <li className="dropdown-item">
            <a href="#">Dress & Frock</a>
          </li>

          <li className="dropdown-item">
            <a href="#">Earrings</a>
          </li>

          <li className="dropdown-item">
            <a href="#">Necklace</a>
          </li>

          <li className="dropdown-item">
            <a href="#">Makeup Kit</a>
          </li>

        </ul>
      </li>

      <li className="menu-category">
        <a href="#" className="menu-title">Jewelry</a>

        <ul className="dropdown-list">

          <li className="dropdown-item">
            <a href="#">Earrings</a>
          </li>

          <li className="dropdown-item">
            <a href="#">Couple Rings</a>
          </li>

          <li className="dropdown-item">
            <a href="#">Necklace</a>
          </li>

          <li className="dropdown-item">
            <a href="#">Bracelets</a>
          </li>

        </ul>
      </li>

      <li className="menu-category">
        <a href="#" className="menu-title">Perfume</a>

        <ul className="dropdown-list">

          <li className="dropdown-item">
            <a href="#">Clothes Perfume</a>
          </li>

          <li className="dropdown-item">
            <a href="#">Deodorant</a>
          </li>

          <li className="dropdown-item">
            <a href="#">Flower Fragrance</a>
          </li>

          <li className="dropdown-item">
            <a href="#">Air Freshener</a>
          </li>

        </ul>
      </li>

      <li className="menu-category">
        <a href="#" className="menu-title">Blog</a>
      </li>

      <li className="menu-category">
        <a href="#" className="menu-title">Hot Offers</a>
      </li>

    </ul>

  </div>

</nav>

<div className="mobile-bottom-navigation">

  <button className="action-btn data-mobile-menu-open-btn" data-mobile-menu-open-btn>
    <IoMenuOutline className="ion-icon" />
  </button>

  <button className="action-btn">
    <IoBagHandleOutline className="ion-icon" />
    <span className="count">0</span>
  </button>

  <button className="action-btn">
    <IoHomeOutline  className="ion-icon"/>
  </button>

  <button className="action-btn">
    <IoHeartOutline className="ion-icon" />
    <span className="count">0</span>
  </button>

  <button className="action-btn data-mobile-menu-open-btn" data-mobile-menu-open-btn>
    <IoGridOutline  className="ion-icon"/>
  </button>

</div>

<nav className="mobile-navigation-menu  has-scrollbar data-mobile-menu" data-mobile-menu>

  <div className="menu-top">
    <h2 className="menu-title">Menu</h2>

    <button className="menu-close-btn data-mobile-menu-close-btn" data-mobile-menu-close-btn>
        <IoCloseOutline className="ion-icon"/>
    </button>
  </div>

  <ul className="mobile-menu-category-list">

    <li className="menu-category">
      <a href="#" className="menu-title">Home</a>
    </li>

    <li className="menu-category">

      <button className="accordion-menu" data-accordion-btn>
        <p className="menu-title">Men's</p>

        <div>
            <IoAddOutline className='add-icon ion-icon'></IoAddOutline>
            <IoRemoveOutline className='remove-icon ion-icon'/>
        </div>
      </button>

      <ul className="submenu-category-list" data-accordion>

        <li className="submenu-category">
          <a href="#" className="submenu-title">Shirt</a>
        </li>

        <li className="submenu-category">
          <a href="#" className="submenu-title">Shorts & Jeans</a>
        </li>

        <li className="submenu-category">
          <a href="#" className="submenu-title">Safety Shoes</a>
        </li>

        <li className="submenu-category">
          <a href="#" className="submenu-title">Wallet</a>
        </li>

      </ul>

    </li>

    <li className="menu-category">

      <button className="accordion-menu" data-accordion-btn>
        <p className="menu-title">Women's</p>

        <div>
            <IoAddOutline className='add-icon ion-icon'></IoAddOutline>
            <IoRemoveOutline className='remove-icon ion-icon'/>
        </div>
      </button>

      <ul className="submenu-category-list" data-accordion>

        <li className="submenu-category">
          <a href="#" className="submenu-title">Dress & Frock</a>
        </li>

        <li className="submenu-category">
          <a href="#" className="submenu-title">Earrings</a>
        </li>

        <li className="submenu-category">
          <a href="#" className="submenu-title">Necklace</a>
        </li>

        <li className="submenu-category">
          <a href="#" className="submenu-title">Makeup Kit</a>
        </li>

      </ul>

    </li>

    <li className="menu-category">

      <button className="accordion-menu" data-accordion-btn>
        <p className="menu-title">Jewelry</p>

        <div>
            <IoAddOutline className='add-icon ion-icon'></IoAddOutline>
            <IoRemoveOutline className='remove-icon ion-icon'/>
        </div>
      </button>

      <ul className="submenu-category-list" data-accordion>

        <li className="submenu-category">
          <a href="#" className="submenu-title">Earrings</a>
        </li>

        <li className="submenu-category">
          <a href="#" className="submenu-title">Couple Rings</a>
        </li>

        <li className="submenu-category">
          <a href="#" className="submenu-title">Necklace</a>
        </li>

        <li className="submenu-category">
          <a href="#" className="submenu-title">Bracelets</a>
        </li>

      </ul>

    </li>

    <li className="menu-category">

      <button className="accordion-menu" data-accordion-btn>
        <p className="menu-title">Perfume</p>

        <div>
            <IoAddOutline className='add-icon ion-icon'></IoAddOutline>
            <IoRemoveOutline className='remove-icon ion-icon'/>
        </div>
      </button>

      <ul className="submenu-category-list" data-accordion>

        <li className="submenu-category">
          <a href="#" className="submenu-title">Clothes Perfume</a>
        </li>

        <li className="submenu-category">
          <a href="#" className="submenu-title">Deodorant</a>
        </li>

        <li className="submenu-category">
          <a href="#" className="submenu-title">Flower Fragrance</a>
        </li>

        <li className="submenu-category">
          <a href="#" className="submenu-title">Air Freshener</a>
        </li>

      </ul>

    </li>

    <li className="menu-category">
      <a href="#" className="menu-title">Blog</a>
    </li>

    <li className="menu-category">
      <a href="#" className="menu-title">Hot Offers</a>
    </li>

  </ul>

  <div className="menu-bottom">

    <ul className="menu-category-list">

      <li className="menu-category">

        <button className="accordion-menu" data-accordion-btn>
          <p className="menu-title">Language</p>
            <IoCaretBackCircleOutline className='caret-back ion-icon' />
        </button>

        <ul className="submenu-category-list" data-accordion>

          <li className="submenu-category">
            <a href="#" className="submenu-title">English</a>
          </li>

          <li className="submenu-category">
            <a href="#" className="submenu-title">Espa&ntilde;ol</a>
          </li>

          <li className="submenu-category">
            <a href="#" className="submenu-title">Fren&ccedil;h</a>
          </li>

        </ul>

      </li>

      <li className="menu-category">
        <button className="accordion-menu" data-accordion-btn>
          <p className="menu-title">Currency</p>
          <IoCaretBackCircleOutline className='caret-back ion-icon'/>
        </button>

        <ul className="submenu-category-list" data-accordion>
          <li className="submenu-category">
            <a href="#" className="submenu-title">USD $</a>
          </li>

          <li className="submenu-category">
            <a href="#" className="submenu-title">EUR &euro;</a>
          </li>
        </ul>
      </li>

    </ul>

    <ul className="menu-social-container">

      <li>
        <a href="#" className="social-link">
            <IoLogoFacebook className='ion-icon' />
        </a>
      </li>

      <li>
        <a href="#" className="social-link">
            <IoLogoTwitter className='ion-icon'/>
        </a>
      </li>

      <li>
        <a href="#" className="social-link">
            <IoLogoInstagram className='ion-icon'/>
        </a>
      </li>

      <li>
        <a href="#" className="social-link">
            <IoLogoLinkedin className='ion-icon'/>
        </a>
      </li>

    </ul>

  </div>

</nav>

</header>

<div className="sidebar  has-scrollbar" data-mobile-menu>

<div className="sidebar-category">

  <div className="sidebar-top">
    <h2 className="sidebar-title">Category</h2>

    <button className="sidebar-close-btn data-mobile-menu-close-btn" data-mobile-menu-close-btn>
      {/* <ion-icon name="close-outline"></ion-icon> */}
    </button>
  </div>

  <ul className="sidebar-menu-category-list">

    <li className="sidebar-menu-category">

      <button className="sidebar-accordion-menu" data-accordion-btn>

        <div className="menu-title-flex">
          <img src="./assets/images/icons/dress.svg" alt="clothes" width="20" height="20"
            className="menu-title-img"/>

          <p className="menu-title">Clothes</p>
        </div>

        <div>
          {/* <ion-icon name="add-outline" class="add-icon"></ion-icon>
          <ion-icon name="remove-outline" class="remove-icon"></ion-icon> */}
        </div>

      </button>

      <ul className="sidebar-submenu-category-list" data-accordion>

        <li className="sidebar-submenu-category">
          <a href="#" className="sidebar-submenu-title">
            <p className="product-name">Shirt</p>
            <data value="300" className="stock" title="Available Stock">300</data>
          </a>
        </li>

        <li className="sidebar-submenu-category">
          <a href="#" className="sidebar-submenu-title">
            <p className="product-name">shorts & jeans</p>
            <data value="60" className="stock" title="Available Stock">60</data>
          </a>
        </li>

        <li className="sidebar-submenu-category">
          <a href="#" className="sidebar-submenu-title">
            <p className="product-name">jacket</p>
            <data value="50" className="stock" title="Available Stock">50</data>
          </a>
        </li>

        <li className="sidebar-submenu-category">
          <a href="#" className="sidebar-submenu-title">
            <p className="product-name">dress & frock</p>
            <data value="87" className="stock" title="Available Stock">87</data>
          </a>
        </li>

      </ul>

    </li>

    <li className="sidebar-menu-category">

      <button className="sidebar-accordion-menu" data-accordion-btn>

        <div className="menu-title-flex">
          <img src="./assets/images/icons/shoes.svg" alt="footwear" className="menu-title-img" width="20"
            height="20"/>

          <p className="menu-title">Footwear</p>
        </div>

        <div>
          {/* <ion-icon name="add-outline" class="add-icon"></ion-icon>
          <ion-icon name="remove-outline" class="remove-icon"></ion-icon> */}
        </div>

      </button>

      <ul className="sidebar-submenu-category-list" data-accordion>

        <li className="sidebar-submenu-category">
          <a href="#" className="sidebar-submenu-title">
            <p className="product-name">Sports</p>
            <data value="45" className="stock" title="Available Stock">45</data>
          </a>
        </li>

        <li className="sidebar-submenu-category">
          <a href="#" className="sidebar-submenu-title">
            <p className="product-name">Formal</p>
            <data value="75" className="stock" title="Available Stock">75</data>
          </a>
        </li>

        <li className="sidebar-submenu-category">
          <a href="#" className="sidebar-submenu-title">
            <p className="product-name">Casual</p>
            <data value="35" className="stock" title="Available Stock">35</data>
          </a>
        </li>

        <li className="sidebar-submenu-category">
          <a href="#" className="sidebar-submenu-title">
            <p className="product-name">Safety Shoes</p>
            <data value="26" className="stock" title="Available Stock">26</data>
          </a>
        </li>

      </ul>

    </li>

    <li className="sidebar-menu-category">

      <button className="sidebar-accordion-menu" data-accordion-btn>

        <div className="menu-title-flex">
          <img src="./assets/images/icons/jewelry.svg" alt="clothes" className="menu-title-img" width="20"
            height="20"/>

          <p className="menu-title">Jewelry</p>
        </div>

        <div>
          {/* <ion-icon name="add-outline" class="add-icon"></ion-icon>
          <ion-icon name="remove-outline" class="remove-icon"></ion-icon> */}
        </div>

      </button>

      <ul className="sidebar-submenu-category-list" data-accordion>

        <li className="sidebar-submenu-category">
          <a href="#" className="sidebar-submenu-title">
            <p className="product-name">Earrings</p>
            <data value="46" className="stock" title="Available Stock">46</data>
          </a>
        </li>

        <li className="sidebar-submenu-category">
          <a href="#" className="sidebar-submenu-title">
            <p className="product-name">Couple Rings</p>
            <data value="73" className="stock" title="Available Stock">73</data>
          </a>
        </li>

        <li className="sidebar-submenu-category">
          <a href="#" className="sidebar-submenu-title">
            <p className="product-name">Necklace</p>
            <data value="61" className="stock" title="Available Stock">61</data>
          </a>
        </li>

      </ul>

    </li>

    <li className="sidebar-menu-category">

      <button className="sidebar-accordion-menu" data-accordion-btn>

        <div className="menu-title-flex">
          <img src="./assets/images/icons/perfume.svg" alt="perfume" className="menu-title-img" width="20"
            height="20"/>

          <p className="menu-title">Perfume</p>
        </div>

        <div>
          {/* <ion-icon name="add-outline" class="add-icon"></ion-icon>
          <ion-icon name="remove-outline" class="remove-icon"></ion-icon> */}
        </div>

      </button>

      <ul className="sidebar-submenu-category-list" data-accordion>

        <li className="sidebar-submenu-category">
          <a href="#" className="sidebar-submenu-title">
            <p className="product-name">Clothes Perfume</p>
            <data value="12" className="stock" title="Available Stock">12 pcs</data>
          </a>
        </li>

        <li className="sidebar-submenu-category">
          <a href="#" className="sidebar-submenu-title">
            <p className="product-name">Deodorant</p>
            <data value="60" className="stock" title="Available Stock">60 pcs</data>
          </a>
        </li>

        <li className="sidebar-submenu-category">
          <a href="#" className="sidebar-submenu-title">
            <p className="product-name">jacket</p>
            <data value="50" className="stock" title="Available Stock">50 pcs</data>
          </a>
        </li>

        <li className="sidebar-submenu-category">
          <a href="#" className="sidebar-submenu-title">
            <p className="product-name">dress & frock</p>
            <data value="87" className="stock" title="Available Stock">87 pcs</data>
          </a>
        </li>

      </ul>

    </li>

    <li className="sidebar-menu-category">

      <button className="sidebar-accordion-menu" data-accordion-btn>

        <div className="menu-title-flex">
          <img src="./assets/images/icons/cosmetics.svg" alt="cosmetics" className="menu-title-img" width="20"
            height="20"/>

          <p className="menu-title">Cosmetics</p>
        </div>

        <div>
          {/* <ion-icon name="add-outline" class="add-icon"></ion-icon>
          <ion-icon name="remove-outline" class="remove-icon"></ion-icon> */}
        </div>

      </button>

      <ul className="sidebar-submenu-category-list" data-accordion>

        <li className="sidebar-submenu-category">
          <a href="#" className="sidebar-submenu-title">
            <p className="product-name">Shampoo</p>
            <data value="68" className="stock" title="Available Stock">68</data>
          </a>
        </li>

        <li className="sidebar-submenu-category">
          <a href="#" className="sidebar-submenu-title">
            <p className="product-name">Sunscreen</p>
            <data value="46" className="stock" title="Available Stock">46</data>
          </a>
        </li>

        <li className="sidebar-submenu-category">
          <a href="#" className="sidebar-submenu-title">
            <p className="product-name">Body Wash</p>
            <data value="79" className="stock" title="Available Stock">79</data>
          </a>
        </li>

        <li className="sidebar-submenu-category">
          <a href="#" className="sidebar-submenu-title">
            <p className="product-name">Makeup Kit</p>
            <data value="23" className="stock" title="Available Stock">23</data>
          </a>
        </li>

      </ul>

    </li>

    <li className="sidebar-menu-category">

      <button className="sidebar-accordion-menu" data-accordion-btn>

        <div className="menu-title-flex">
          <img src="./assets/images/icons/glasses.svg" alt="glasses" className="menu-title-img" width="20"
            height="20"/>

          <p className="menu-title">Glasses</p>
        </div>

        <div>
          {/* <ion-icon name="add-outline" class="add-icon"></ion-icon>
          <ion-icon name="remove-outline" class="remove-icon"></ion-icon> */}
        </div>

      </button>

      <ul className="sidebar-submenu-category-list" data-accordion>

        <li className="sidebar-submenu-category">
          <a href="#" className="sidebar-submenu-title">
            <p className="product-name">Sunglasses</p>
            <data value="50" className="stock" title="Available Stock">50</data>
          </a>
        </li>

        <li className="sidebar-submenu-category">
          <a href="#" className="sidebar-submenu-title">
            <p className="product-name">Lenses</p>
            <data value="48" className="stock" title="Available Stock">48</data>
          </a>
        </li>

      </ul>

    </li>

    <li className="sidebar-menu-category">

      <button className="sidebar-accordion-menu" data-accordion-btn>

        <div className="menu-title-flex">
          <img src="./assets/images/icons/bag.svg" alt="bags" className="menu-title-img" width="20" height="20" />

          <p className="menu-title">Bags</p>
        </div>

        <div>
          {/* <ion-icon name="add-outline" class="add-icon"></ion-icon>
          <ion-icon name="remove-outline" class="remove-icon"></ion-icon> */}
        </div>

      </button>

      <ul className="sidebar-submenu-category-list" data-accordion>

        <li className="sidebar-submenu-category">
          <a href="#" className="sidebar-submenu-title">
            <p className="product-name">Shopping Bag</p>
            <data value="62" className="stock" title="Available Stock">62</data>
          </a>
        </li>

        <li className="sidebar-submenu-category">
          <a href="#" className="sidebar-submenu-title">
            <p className="product-name">Gym Backpack</p>
            <data value="35" className="stock" title="Available Stock">35</data>
          </a>
        </li>

        <li className="sidebar-submenu-category">
          <a href="#" className="sidebar-submenu-title">
            <p className="product-name">Purse</p>
            <data value="80" className="stock" title="Available Stock">80</data>
          </a>
        </li>

        <li className="sidebar-submenu-category">
          <a href="#" className="sidebar-submenu-title">
            <p className="product-name">Wallet</p>
            <data value="75" className="stock" title="Available Stock">75</data>
          </a>
        </li>

      </ul>

    </li>

  </ul>

</div>
<div className="product-showcase">

<h3 className="showcase-heading">best sellers</h3>

<div className="showcase-wrapper">

  <div className="showcase-container">

    <div className="showcase">

      <a href="#" className="showcase-img-box">
        <img src="./assets/images/products/1.jpg" alt="baby fabric shoes" width="75" height="75"
          className="showcase-img"/>
      </a>

      <div className="showcase-content">

        <a href="#">
          <h4 className="showcase-title">baby fabric shoes</h4>
        </a>

        <div className="showcase-rating">
          {/* <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon> */}
        </div>

        <div className="price-box">
          <del>$5.00</del>
          <p className="price">$4.00</p>
        </div>

      </div>

    </div>

    <div className="showcase">

      <a href="#" className="showcase-img-box">
        <img src="./assets/images/products/2.jpg" alt="men's hoodies t-shirt" className="showcase-img"
          width="75" height="75"/>
      </a>

      <div className="showcase-content">

        <a href="#">
          <h4 className="showcase-title">men's hoodies t-shirt</h4>
        </a>
        <div className="showcase-rating">
          {/* <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star-half-outline"></ion-icon> */}
        </div>

        <div className="price-box">
          <del>$17.00</del>
          <p className="price">$7.00</p>
        </div>

      </div>

    </div>

    <div className="showcase">

      <a href="#" className="showcase-img-box">
        <img src="./assets/images/products/3.jpg" alt="girls t-shirt" className="showcase-img" width="75"
          height="75"/>
      </a>

      <div className="showcase-content">

        <a href="#">
          <h4 className="showcase-title">girls t-shirt</h4>
        </a>
        <div className="showcase-rating">
          {/* <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star-half-outline"></ion-icon> */}
        </div>

        <div className="price-box">
          <del>$5.00</del>
          <p className="price">$3.00</p>
        </div>

      </div>

    </div>

    <div className="showcase">

      <a href="#" className="showcase-img-box">
        <img src="./assets/images/products/4.jpg" alt="woolen hat for men" className="showcase-img" width="75"
          height="75"/>
      </a>

      <div className="showcase-content">

        <a href="#">
          <h4 className="showcase-title">woolen hat for men</h4>
        </a>
        <div className="showcase-rating">
          {/* <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon> */}
        </div>

        <div className="price-box">
          <del>$15.00</del>
          <p className="price">$12.00</p>
        </div>

      </div>

    </div>

  </div>

</div>

</div>

</div>

        </>
    )
}
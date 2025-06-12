import React from "react";
import { ROUTE_PATH } from "../constants/routePath";
import MainLayout from "../layouts/main-layout";

const HomePage = React.lazy(() => import("../pages/HomePage"));
const LoginPage = React.lazy(() => import("../pages/LoginPage"));
const ProductDetailPage = React.lazy(() => import("../pages/ProductDetailPage"));
const ProductPage = React.lazy(() => import("../pages/ProductPage"));
const ProfileUser = React.lazy(() => import("../pages/ProfileUser"));
const RegisterPage = React.lazy(() => import("../pages/RegisterPage"));
const ServicePage = React.lazy(() => import("../pages/ServicePage"));
const ShopPage = React.lazy(() => import("../pages/ShopPage"));
const OTPVerifyPage = React.lazy(() => import("../pages/VerifyPage"));
const OrderPage = React.lazy(() => import("../pages/OrderPage"));

const AppRoute = [
    { path: ROUTE_PATH.HOME, page: HomePage, layout: MainLayout },
    { path: ROUTE_PATH.HOME_Page, page: HomePage, layout: MainLayout },
    { path: ROUTE_PATH.LOGIN, page: LoginPage},
    { path: ROUTE_PATH.PRODUCT, page: ProductPage, layout: MainLayout },
    { path: ROUTE_PATH.PRODUCT_DETAIL, page: ProductDetailPage, layout: MainLayout },
    { path: ROUTE_PATH.PROFILE, page: ProfileUser, layout: MainLayout },
    { path: ROUTE_PATH.REGISTER, page: RegisterPage},
    { path: ROUTE_PATH.SERVICE, page: ServicePage, layout: MainLayout },
    { path: ROUTE_PATH.SHOP, page: ShopPage, layout: MainLayout },
    { path: ROUTE_PATH.VERIFY, page: OTPVerifyPage},
    { path: ROUTE_PATH.ORDER, page: OrderPage, layout: MainLayout },
];

export default AppRoute;
<template>
    <div class="container">
        <div class="content">
            <h3 class="title">Shipping Information</h3>
            <hr>
            <p>We offer these convenient shipping options for you.</p>
            <ul>
                <li>Free standard shipping on orders over VND 500000</li>
                <li>Ups first class and priority mail</li>
                <li>Ups ground and 2 day air</li>
            </ul>
            <p>
                Shipping rates are calculated by weight and the carrier & service selected at checkout.
            </p>
            <p>
                All orders are processed on weekdays and ship in 1-2 business days. We strive to ship your order the same day it was
                placed or the next business day.
            </p>
            <p>Some order processing and delivery times may vary during the month of december.</p>
            <p>Shipping rates and specials apply to orders from the continental united states only.</p>
            <p>If you have any questions, <router-link class="link" to="/contact-us">reach out to us</router-link> to us and we will be happy to assist you.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "shipping-information",
}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 80px;

    .content {
        line-height: 1.6;

        .title {
            font-size: 28px !important;
            font-weight: 450;
            color: #555;
            text-align: center;
            margin: 20px;
        }

        hr {
            margin: 15px 0;
            border-width: 0;
            border-top: 1px solid #777;
            opacity: 0.1;
        }

        p {
            text-align: justify;
        }

        ul {
            margin-left: 25px;

            li {
                margin-bottom: 10px;
            }
        }

        .link {
            opacity: 0.7;
            color: #000;

            &:hover {
                opacity: 1;
            }
        }

    }

}

@media screen and (max-width: 1080px) {
    .container {
        .content {
            margin: 50px 50px 80px 50px;
        }
    }
}
</style>
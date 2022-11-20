<template>
    <div class="container">
        <div class="content">
            <h3 class="title">Return Policy</h3>
            <hr>
            <p>We are happy to return any full price item that is unworn (not tried on the foot), unwashed and returned to us within
                15
                days from time of original receipt. socks must be returned to us in the condition they were received, with labels
                fully
                intact.</p>
            <!-- <br> -->
            <p class="emphasis">Socks are a base layer and due to the nature of feet, we cannot sell returned socks that have been tried
                on. If you have
                any concerns about sizing, please reach out to us before removing your socks from their original packaging, we would
                be
                happy to answer any questions you may have.</p>
            <!-- <br> -->
            <p>
                Please <router-link class="link" to="/contact-us">email us</router-link> within 15 days of receiving your order and we will issue
                a return authorization. Include the original
                packing slip or your full name and order number with your shipment so that we can process your refund quickly.
            </p>
            <!-- <br> -->
            <p>
                Domestic orders – should you wish to have a shipping label emailed to you, we are happy to do so. If our shipping
                label
                is used, we will deduct a $5.00 shipping charge from your refund amount.
            </p>
            
            <ul>
                <li>The original shipping charge and return shipping fees are non refundable.</li>
                <li>Sale items are final and not returnable.</li>
                <li>Exchanges are not available at this time.</li>
            </ul>
            
            <br>
            <p>If the return meets the above requirements, we will refund your account within seven days of receipt of the returned
                items; You will be notified by email once your refund is issued. Please note that it can take up to seven additional
                days for the refund to appear on your account.</p>
            <!-- <br> -->
            <p>We reserve the right to reject any returns that do not meet these requirements. If your return is not accepted, it
                will
                be sent back at the customer’s expense and a refund will not be issued.</p>
            <!-- <br> -->
            <p>We do not take responsibility for any items lost during the return shipping.</p>
            <p><span class="bold">Ship returns to:</span> 42B, Street No 54, Thao Dien Ward, District 2, Ho Chi Minh City.</p>
            <!-- <br> -->
            <p>If you have any questions about returns, please <router-link class="link" to="/contact-us">contact us</router-link> .</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "return-policy",
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
        .emphasis {
            font-weight: 450;
            font-style: italic;
        }
        .link {
            opacity: 0.7;
            color: #000;
            &:hover {
                opacity: 1;
            }            
        }
        .bold {
            display: inline-block;
            font-weight: 500;
        }
    }

}
@media screen and (max-width: 1080px){
    .container{
        .content {
            margin: 50px 50px 80px 50px;
        }
    }
}
</style>
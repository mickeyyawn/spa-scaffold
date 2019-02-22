<template>
    <div id="footer">
        
        <div id="footer-text">Built with 
            <font-awesome-icon icon="heart" id="footer-heart-icon" /> 
            by Mickey Yawn in Georgia. All rights reserved. 2019. 
        </div>

    </div>
</template>


<script>
    console.log('in the footer component...');
</script>

<style lang="css">

    #footer {
        position:fixed;
        bottom:0px;
        height:40px;
        font:'Montserrat', Helvetica, Arial, sans-serif;
        left:0px;
        width:100%;
        z-index: 1001;
        margin-left: auto;
        margin-right: auto;
        opacity: 0.7;
        background-color: #FFFFFF;
        padding-bottom:10px;

    }

    #footer-text {
        text-align: center;
        vertical-align: middle;
        line-height: 40px;
        color:rgb(82, 81, 81);
        font-size:.8rem;
        opacity: 0.7;
    }

    #footer-heart-icon{
        color:red;
    }


</style>
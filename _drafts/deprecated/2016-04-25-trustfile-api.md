---
layout: page
title: Trustfile API
date: 2016-04-25 15:29
author: anya.stettler
comments: true
categories: []
---
<div style="height: 0;">
<script src="/wp-content/swagger-ui/lib/jquery-1.8.0.min.js" type="text/javascript"></script>
<script src="/wp-content/swagger-ui/lib/jquery.slideto.min.js" type="text/javascript"></script>
<script src="/wp-content/swagger-ui/lib/jquery.wiggle.min.js" type="text/javascript"></script>
<script src="/wp-content/swagger-ui/lib/jquery.ba-bbq.min.js" type="text/javascript"></script>
<script src="/wp-content/swagger-ui/lib/handlebars-2.0.0.js" type="text/javascript"></script>
<script src="/wp-content/swagger-ui/lib/js-yaml.min.js" type="text/javascript"></script>
<script src="/wp-content/swagger-ui/lib/lodash.min.js" type="text/javascript"></script>
<script src="/wp-content/swagger-ui/lib/backbone-min.js" type="text/javascript"></script>
<script src="http://api-reference.s3-website-us-west-2.amazonaws.com/swagger-ui.js" type="text/javascript"></script>
<script src="/wp-content/swagger-ui/lib/highlight.7.3.pack.js" type="text/javascript"></script>
<script src="/wp-content/swagger-ui/lib/jsoneditor.min.js" type="text/javascript"></script>
<script src="/wp-content/swagger-ui/lib/marked.js" type="text/javascript"></script>
<script src="/wp-content/swagger-ui/lib/swagger-oauth.js" type="text/javascript"></script>
<script src="/wp-content/swagger-ui/lib/bootstrap.min.js" type="text/javascript"></script>
<link href='http://api-reference.s3-website-us-west-2.amazonaws.com/css/bootstrap.css' media='screen' rel='stylesheet' type='text/css' />
<link href='http://api-reference.s3-website-us-west-2.amazonaws.com/css/adnref.css' media='screen' rel='stylesheet' type='text/css' />
</div>
<script type="text/javascript">
    $(function () {
      var url = window.location.search.match(/url=([^&]+)/);
        url = "http://docs.trustfile.avalara.com:8002/api-docs";
      // Pre load translate...
      if(window.SwaggerTranslator) {
        window.SwaggerTranslator.translate();
      }
      window.swaggerUi = new SwaggerUi({
        url: url,
        dom_id: "swagger-ui-container",
        supportedSubmitMethods: ['get', 'post', 'put', 'delete', 'patch'],
        onComplete: function(swaggerApi, swaggerUi){
          if(typeof initOAuth == "function") {
            initOAuth({
              clientId: "your-client-id",
              clientSecret: "your-client-secret-if-required",
              realm: "your-realms",
              appName: "your-app-name",
              scopeSeparator: ",",
              additionalQueryStringParams: {}
            });
          }
          if(window.SwaggerTranslator) {
            window.SwaggerTranslator.translate();
          }
          addApiKeyAuthorization();
        },
        onFailure: function(data) {
          log("Unable to Load SwaggerUI");
        },
        docExpansion: "none",
        jsonEditor: false,
        apisSorter: "alpha",
        defaultModelRendering: 'schema',
        showRequestHeaders: false
      });
      function addApiKeyAuthorization(){
        if($('#input_apiKey')[0]) {
        var key = encodeURIComponent($('#input_apiKey')[0].value);
      }
      }
      $('#input_apiKey').change(addApiKeyAuthorization);
     window.swaggerUi.load();
      function log() {
        if ('console' in window) {
          console.log.apply(console, arguments);
        }
      }
  });
</script>
<div class="container-fluid">
<div id="swagger-ui-container" class="swagger-ui-wrap"></div>
</div>

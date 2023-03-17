/*! Investorm v1.3.2 | Copyright by Softnio. */
!function(a,b){"use strict";function c(c,d){let e=!!d&&b(d);r.on("click",c,function(c){let d=b(this),f=d.parents("form"),g=f.attr("action"),h=f.data("confirm"),i=f.serialize(),j=1200;f.valid()&&(h&&typeof msgs[h]!=u&&msgs[h]?a.Ask(msgs[h].title,msgs[h].context,msgs[h].btn,msgs[h].custom,msgs[h].type).then(function(a){a&&t.toPost(g,i,{btn:d,timeout:j,after:function(a){!0!==a.reload&&setTimeout(function(){"hide"==a.modal&&f.parents(".modal").modal("hide")},j),a.embed&&0<e.length&&e.html(a.embed).addClass("embed-updated")}})}):t.toPost(g,i,{btn:d,timeout:j,after:function(a){!0!==a.reload&&setTimeout(function(){"hide"==a.modal&&f.parents(".modal").modal("hide")},j),a.embed&&0<e.length&&e.html(a.embed).addClass("embed-updated")}})),c.preventDefault()})}function d(c){r.on("click",c,function(c){let d=b(this),e=typeof routes!=u&&routes,f={},g={},h=d.data("action"),i=d.data("uid"),j=d.data("view"),k=d.data("backdrop"),l=d.data("method");e[h]?("plan"!=h&&"profit"!=h&&(f.view=!!j&&j),i&&(f.uid=i),l&&(f.method=l),g.modal=s,g.backdrop=!k||k,s.modal("dispose"),t.toModal(e[h],f,g)):a.Toast(v,"error",{ui:"is-dark"}),c.preventDefault()})}function e(c,d){let e=!!d&&b(d);r.on("click",c,function(c){let d=b(this),f=d.data("uid"),g=d.data("action"),h=!!d.data("reload"),i=typeof quick_update!=u&&quick_update,j={uid:f,action:g,reload:h};if(i&&f&&typeof qmsg!=u){let c=qmsg.action[g]?qmsg.action[g]:qmsg.context,d="password"==g?"danger":"",h="password"==g?"error":"info";a.Ask(qmsg.title,c,qmsg.btn,d,h).then(function(a){a&&t.toPost(i,j,{after:function(a){if("suspend"==g||"active"==g){let c="success",d="danger",e="suspend",h="active";"active"==g&&(c="danger",d="success",e="active",h="suspend"),b(".u-sw-"+e+"-"+f).addClass("d-none"),b(".u-sw-"+h+"-"+f).removeClass("d-none"),b(".u-status-"+f).text(a.state).removeClass("text-"+c).addClass("text-"+d)}a.embed&&0<e.length&&e.html(a.embed).addClass("embed-updated")}})})}else a.Toast(v,"error",{ui:"is-dark"});c.preventDefault()})}function f(){let c=b(".bulk-apply"),d=b("#bulk-action"),e=b(".qs-checkbox-i");c.on("click",function(){let c=d.val(),f=typeof bulk_update!=u&&bulk_update,g=!1,h=!1,j=[];""!=c&&"0"!=c&&f&&typeof qmsg!=u?(e.each(function(a,c){b(c).is(":checked")&&j.push(b(this).data("uid"))}),g={users:j,action:c},h=typeof qmsg.action[c]!=u&&qmsg.action[c]?qmsg.action[c]:qmsg.action.bulk,"sendEmail"===c||"assignGroup"===c?t.toAjax(f,g,{onSuccess:function(a){a.embed&&(s.html(a.embed),s.modal({show:!0,backdrop:"static"}))}}):a.Ask(qmsg.title,h,qmsg.bulkbtn,"","info").then(function(a){a&&t.toPost(f,g)})):a.Toast(v,"error",{ui:"is-dark"})})}function g(c,d){r.on("click",c,function(c){c.preventDefault();let e=b(this),f=e.data("method"),g={btn:e};if(e.attr("disabled",!0),"modal"==d){let a=e.parents(".modal"),b=a.find(".close");g.target=a,g.close=b,b.addClass("disabled")}let h=typeof bulkpq.url!=u&&bulkpq.url,i=typeof bulkpq.total==u?0:bulkpq.total,j=typeof bulkpq.queues!=u&&bulkpq.queues;h&&j&&a.pqueue(h,{batchs:j[0],action:f,total:i},g,j,{prefix:"pq"})})}function h(){let a=b(".qs-checkbox"),c=b(".qs-checkbox-i"),d=b(".bulk-apply"),e=b("#bulk-action");a.on("click",function(){c.prop("checked",this.checked),q(d,c,e)}),c.on("click",function(){q(d,c,e)}),e.on("change",function(){q(d,c,e)})}function i(){let a=b(".send-email"),c=b(".u-send-mail"),d=b("#send-email-user");a.on("click",function(a){let e=b(this),f=e.data("uid");f&&0<d.length&&(d.modal("show"),d.find("#userid").val(f),d.find("form")[0].reset(),t.button(c,!0)),a.preventDefault()}),c.on("click",function(a){let c=b(this),d=c.parents("form"),e=c.parents(".modal");d.valid()&&(t.button(c,!1,!0),t.toSubmit(d,{btn:c,hide:e})),a.preventDefault()})}function j(){let c=b(".send-test-mail");c.on("click",function(c){let d,e,f,g=b(this),h={};g.data("slug")?(e=typeof mail_sent_url!=u&&mail_sent_url,f={slug:g.data("slug")}):(d=g.parents("form"),e=d.attr("action"),f=d.serialize(),h={btn:g}),e&&f?t.toPost(e,f,h):a.Toast(v,"error",{ui:"is-dark"}),c.preventDefault()})}function k(){let c=b(".validate-slug"),d=null;c.on("input",function(){let c=b(this),e=typeof routes!=u&&routes,f=c.val(),g=c.data("uid"),h=c.parent("div").find(".validate-slug-loader"),i=c.parent("div").find(".validate-slug-error");d&&clearTimeout(d),h.removeClass("hide"),i.addClass("hide"),e.validate?d=setTimeout(function(){t.toPost(e.validate,{slug:f,id:g},{onSuccess:function(a){h.addClass("hide"),i.removeClass("hide"),a.note&&i.attr("data-original-title",a.note),a.error?i.removeClass("ni-check").addClass("ni-alert"):i.removeClass("ni-alert").addClass("ni-check")}})},300):a.Toast(v,"error",{ui:"is-dark"})})}function l(){let a=b(".submit-settings");a.on("click",function(a){let c=b(this),d=c.parents("form"),e=d.attr("action"),f=d.serialize();e&&f&&t.toPost(e,f,{btn:c}),a.preventDefault()})}function m(){let a=b("#currency-based"),c=b("#currency-alter"),d=b(".supported-cur-cb");a.add(c).on("change",function(){let a=b(this).val().toLowerCase();b("#supported-cur-"+a).prop("checked",!0)}),d.on("change",function(){if(!this.checked){let d=b(this).attr("id").replace("supported-cur-",""),e=a.val().toLowerCase(),f=c.val().toLowerCase();(d===e||d===f)&&b(this).prop("checked",!0)}});let e=b("#exchange-method"),f=b("#exchange-method-manual"),g=b("#exchange-method-auto");e.on("change",function(){let a=e.val();"manual"==a?(f.css("display","block"),g.css("display","none")):(f.css("display","none"),g.css("display","block"))})}function n(){let c=b(".form-settings");a.Toggle.switchValue(".switch-option",{target:".switch-option-value"}),c.each(function(){t.states(b(this))}),b(document).on("click",".back-me",function(a){a.preventDefault(),window.history.back()})}function o(c){function d(c,d){t.toPost(c,d,{onSuccess:function(c){let d=c.embed&&c.orderid||"modal"==c.hide?350:50;if("modal"==c.hide&&s.modal("hide"),!0===c.status&&(s.html(""),c.modal&&(s.html(c.modal),s.modal("dispose"),s.modal({backdrop:"static",show:!0})),c.embed&&c.orderid&&(b("#order-id-"+c.orderid).html(c.embed).addClass("order-updated"),s.modal("hide"))),c.msg){let b=c.type?c.type:"success",e=c.reload&&!0!==c.reload?c.reload:1200,f=c.title&&c.msg?"<h5>"+c.title+"</h5><p>"+c.msg+"</p>":c.msg,g=c.position?c.position:"bottom-right";f&&setTimeout(function(){a.Toast(f,b,{position:g})},d)}}})}r.on("click",c,function(c){let e=b(this),f=!!e.is("button")&&e.parents("form"),g=typeof routes!=u&&routes,h=!!e.data("reload"),i=!!e.data("confirm"),j=!!e.data("state")&&e.data("state"),k=0<f.length?f.data("action"):e.data("action"),l=0<f.length?f.attr("action"):g[k];if(l&&k&&j){let b,c=e.data("uid"),g=e.data("tnx");if(0<f.length?(b=f.serialize(),b=b+"&method="+k+"&reload="+h):b={uid:c,orderid:g,status:j,method:k,reload:h},i&&typeof msgs!=u&&typeof msgs[j]!=u&&msgs[j]){let c=msgs[j].title,e=msgs[j].context,f=msgs[j].btn,g=msgs[j].custom,h=msgs[j].type;a.Ask(c,e,f,g,h).then(function(a){a&&d(l,b)})}else d(l,b)}else a.Toast(v,"error",{ui:"is-dark"});c.preventDefault()})}function p(c,d){function e(a,b,c){t.toPost(a,b,c)}let f=b(c),g=d?d:"click";f.on(g,function(c){let d=b(this),f=typeof routes!=u&&routes,g=d.data("action"),h=d.data("uid"),i=d.data("slug"),j=!!d.data("redirect"),k=!!d.data("reload"),l=!!d.data("confirm");if(f[g]){let b=f[g],c=!!d.is("button")&&{btn:d},m={uid:h?h:null,slug:i?i:null,reload:k,redirect:j};("payment"==g||"withdraw"==g)&&(m={slug:i,type:g,status:d.is(":checked")?"active":"inactive",reload:k,redirect:j}),"cancelled"==g&&(m={uid:h?h:null,reload:k}),"payout"==g&&(m={reload:k}),l&&typeof msgs!=u&&msgs[g]?a.Ask(msgs[g].title,msgs[g].context,msgs[g].btn,msgs[g].custom,msgs[g].type).then(function(a){a&&e(b,m,c,g)}):e(b,m,c,g)}else a.Toast(v,"error",{ui:"is-dark"});c.preventDefault()})}function q(a,c,d){let e=b(a),f=b(c).is(":checked"),g=b(d).val();""!=g&&"0"!=g&&f?e.removeClass("disabled").prop("disabled",!1):e.addClass("disabled").prop("disabled",!0)}let r=b(document),s=b("#ajax-modal"),t=a.Form,u="undefined",v="Something wrong in form or may invalid data.";r.ready(function(){i(),f(),h(),l(),k(),j(),n(),m(),o(".m-tnx-update"),p(".system-opt"),p(".admin-action"),p(".qaj-dwm","change"),e(".quick-action"),c(".m-tnx-create"),c("#user-add"),d(".uaj-mntnx"),d(".uaj-tnx"),p(".m-ivs-payout"),p(".m-ivs-actions"),g(".m-sync-pay","modal"),d(".m-ivs-process"),d(".m-ivs-scheme"),c(".m-ivs-save","#ivpsl-ajcon"),e(".m-ivs-update","#ivpsl-ajcon"),c(".m-ivs-approve"),c(".m-ivs-cancel-plan")})}(NioApp,jQuery);

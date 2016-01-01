/**
 * Vue Plugin Install.
 */

function install(Vue) {

    var AlertConstructor = Vue.extend(require('./alert.vue'));
    var alertInstance = null;

    Object.defineProperty(Vue.prototype, '$alert', {

        get: function () {

            return (message) => {
                alertInstance = new AlertConstructor({
                    el: document.createElement('div'),
                    data() {
                        return {
                            message: message
                        }
                    }
                });
                alertInstance.$appendTo(document.body);
            };
        }

    });

    Vue.transition('bounce', {
        afterEnter: function (el) {
            setTimeout(() => {
                alertInstance.$remove();
            }, 2000);
        }
    });
}

if (window.Vue) {
    Vue.use(install);
}

module.exports = install;

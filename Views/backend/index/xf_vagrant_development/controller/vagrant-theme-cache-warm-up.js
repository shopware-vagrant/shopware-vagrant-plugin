
//{block name="backend/index/xf_vagrant_development/controller/vagrant_theme_cache_warm_up"}
Ext.define('Shopware.apps.Index.xfVagrantDevelopment.controller.VagrantThemeCacheWarmUp', {
    /**
     * The parent class that this class extends.
     * @string
     */
    override: 'Shopware.apps.Index.controller.ThemeCacheWarmUp',

    /**
     * Override the init function, such that the listener for theme recompiling popup,
     * is not registered, the theme recompiling is done by grunt
     *
     * @public
     * @constructor
     * @return void
     */
    init: function() {
        var me = this;
    }

});
//{/block}

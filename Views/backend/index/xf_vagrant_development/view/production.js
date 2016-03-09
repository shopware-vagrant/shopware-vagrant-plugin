//{namespace name="backend/xf_vagrant_development/view/main"}
Ext.define('Shopware.apps.Index.xfVagrantDevelopment.view.VagrantProduction', {
    /**
     * Extend the base widget view
     */
    extend: 'Shopware.apps.Index.view.widgets.Base',

    /**
     * Set alias so the widget can be identified per widget name
     */
    alias: 'widget.xf-vagrant-development',

    /**
     * Minimum / Default height of the widget
     */
    minHeight: 80,

    /**
     * Maximum height that the widget can have
     */
    maxHeight: 600,

    /**
     * Initializes the widget.
     * Creates the account store and the Grid for showing the newest registrations.
     * Adds a refresh button to the header to manually refresh the grid.
     *
     * @public
     * @return void
     */
    initComponent: function () {
        var me = this;
        me.documentationButton = Ext.create('Ext.button.Button', {
            text: '<svg width="42" height="42" viewBox="0 0 1792 1792"><path d="M1024 452l316 316-572 572-316-316zm-211 979l618-618q19-19 19-45t-19-45l-362-362q-18-18-45-18t-45 18l-618 618q-19 19-19 45t19 45l362 362q18 18 45 18t45-18zm889-637l-907 908q-37 37-90.5 37t-90.5-37l-126-126q56-56 56-136t-56-136-136-56-136 56l-125-126q-37-37-37-90.5t37-90.5l907-906q37-37 90.5-37t90.5 37l125 125q-56 56-56 136t56 136 136 56 136-56l126 125q37 37 37 90.5t-37 90.5z" fill="#fff"/></svg>',
            tooltip: 'Documentation',
            handler: function () {
                window.open('https://gitlab.com/xf-/shopware-vagrant/wikis/home', '_blank');
            }
        });

        me.widgetContainer = Ext.create('Ext.container.Container', {
            layout: 'anchor',
            columnWidth: 0,
            defaults: {
                width: 59,
                height: 59,
                cls: 'secondary',
                style: 'background: rgba(255,255,255,0.1)',
                margin: 6,
                padding: 0
            },
            items: [
                me.documentationButton
            ]
        });

        me.items = [me.widgetContainer];

        me.callParent(arguments);
    }
});

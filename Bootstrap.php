<?php

/**
 * xf Vagrant Development Plugin - Bootstrap
 *
 * @category  Shopware
 * @package   Shopware\Plugins\XfVagrantDevelopment
 * @copyright Copyright (c) Xaver Maierhofer
 */
class Shopware_Plugins_Backend_XfVagrantDevelopment_Bootstrap extends Shopware_Components_Plugin_Bootstrap
{
    /**
     * Return plugin label for the plugin manager list
     *
     * @return string
     */
    public function getLabel()
    {
        return 'Vagrant Development';
    }

    /**
     * Default plugin install method to register all required components.
     *
     * @return bool
     */
    public function install()
    {
        // Adds a new widget to the database
        $this->createWidget('xf-vagrant-development');

        // Add path to backend controller
        $this->registerController('Backend', 'XfVagrantDevelopment');

        // extend index extjs module
        $this->subscribeEvent(
            'Enlight_Controller_Action_PostDispatch_Backend_Index',
            'onPostDispatchBackendIndex'
        );

        return true;
    }


    /**
     * On uninstall remove attributes and re-generate customer-attribute models
     *
     * @return bool
     */
    public function uninstall() {
        return true;
    }


    /**
     * @param Enlight_Event_EventArgs $args
     */
    public function onPostDispatchBackendIndex(Enlight_Event_EventArgs $args)
    {
        $view = $args->getSubject()->View();

        $view->addTemplateDir($this->Path() . 'Views/');

        $environment = getenv('VAGRANT_BOX') ?: false;
        // if the controller action name equals "index" we have to extend the backend article application
        if ($environment === 'shopware-vagrant') {
            $view->extendsTemplate('backend/index/xf_vagrant_development/app-vagrant-development.js');
        } else {
            $view->extendsTemplate('backend/index/xf_vagrant_development/app.js');
        }
    }
}

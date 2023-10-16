class UIFactory {
    createButton() { }
    createTextField() { }
}

class MaterialUIFactory extends UIFactory {
    createButton() {
        return new MaterialUIButton();
    }
    createTextField() {
        return new MaterialUITextField();
    }
}

class BootstrapUIFactory extends UIFactory {
    createButton() {
        return new BootstrapButton();
    }
    createTextField() {
        return new BootstrapTextField();
    }
}

class MaterialUIButton { }
class MaterialUITextField { }

class BootstrapButton { }
class BootstrapTextField { }

const materialFactory = new MaterialUIFactory();
const button = materialFactory.createButton();
const textField = materialFactory.createTextField();

const bootstrapFactory = new BootstrapUIFactory();
const button2 = bootstrapFactory.createButton();
const textField2 = bootstrapFactory.createTextField();
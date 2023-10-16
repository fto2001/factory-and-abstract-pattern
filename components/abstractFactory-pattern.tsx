abstract class UIFactory {
    abstract createButton(): Button;
    abstract createTextField(): TextField;
}

class MaterialUIFactory extends UIFactory {
    public createButton() {
        return new MaterialUIButton();
    }
    public createTextField() {
        return new MaterialUITextField();
    }
}

class BootstrapUIFactory extends UIFactory {
    public createButton() {
        return new BootstrapButton();
    }
    public createTextField() {
        return new BootstrapTextField();
    }
}

interface Button {
    onChange(): void;
}

interface TextField {
    displayText(): string;
}

class MaterialUIButton implements Button {
    public onChange() {
        console.log('Material UI Button changed');
    }
}
class MaterialUITextField implements TextField {
    public displayText() {
        return 'Hello world';
    }
}

class BootstrapButton implements Button {
    public onChange() {
        console.log('Bootstrap Button changed');
    }
}
class BootstrapTextField implements TextField {
    public displayText() {
        return 'Hello world';
    }
}

const materialFactory = new MaterialUIFactory();
const materialButton = materialFactory.createButton();
const materialTextField = materialFactory.createTextField();

materialButton.onChange();
console.log(materialTextField.displayText());

const bootstrapFactory = new BootstrapUIFactory();
const bootstrapButton = bootstrapFactory.createButton();
const bootstrapTextField = bootstrapFactory.createTextField();

bootstrapButton.onChange();
console.log(bootstrapTextField.displayText()); 

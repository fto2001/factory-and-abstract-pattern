abstract class UIFactory {
    public abstract createButton(): Button;
    public abstract createTextField(): TextField;
}

class MaterialUIFactory extends UIFactory {
    public createButton(): MaterialUIButton {
        return new MaterialUIButton();
    }

    public createTextField() {
        return new MaterialUITextField();
    }
}

class JQueryUIFactory extends UIFactory {
    public createButton(): JQueryUIButton {
        return new JQueryUIButton();
    }

    public createTextField(): JQueryUITextField {
        return new JQueryUITextField();
    }
}

class BootstrapUIFactory extends UIFactory {
    public createButton(): BootstrapButton {
        return new BootstrapButton();
    }

    public createTextField(): BootstrapTextField {
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

class JQueryUIButton implements Button {
    public onChange() {
        console.log('JQuery UI Button changed');
    }
}

class JQueryUITextField implements TextField {
    public displayText() {
        return 'Goodbye world';
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

const jQueryFactory = new JQueryUIFactory();
const jQueryButton = jQueryFactory.createButton();
const jQueryTextField = jQueryFactory.createTextField();

jQueryButton.onChange();
console.log(jQueryTextField.displayText());

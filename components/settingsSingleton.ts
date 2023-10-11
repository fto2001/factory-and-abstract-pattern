class SettingsSingleton {
    private static instance: SettingsSingleton | null = null;
    private siteTitle: string;

    private constructor() {
        this.siteTitle = 'Next.js first web-site';
    }

    public static getInstance(): SettingsSingleton {
        if (!SettingsSingleton.instance) {
            SettingsSingleton.instance = new SettingsSingleton();
        }

        return SettingsSingleton.instance;
    }

    public getSiteTitle(): string {
        return this.siteTitle;
    }

    public setSiteTitle(newTitle: string): void {
        this.siteTitle = newTitle;
    }
}

const settings = SettingsSingleton.getInstance();

export default settings;
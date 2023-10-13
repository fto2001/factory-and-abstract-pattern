interface Subject {
    request(): void;
}

class RealSubject implements Subject {
    request() {
        console.log("The real object caused the request.");
    }
}

class ProxyObject implements Subject {
    private realSubject: RealSubject | null = null;

    request() {
        if (!this.realSubject) {
            this.realSubject = new RealSubject();
        }

        console.log("The proxy redirects the request.");
        this.realSubject.request();
    }
}

const proxy: Subject = new ProxyObject();

proxy.request();
proxy.request();
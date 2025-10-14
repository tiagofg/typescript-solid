class Singleton {
    private static instance: Singleton;
    private static value: number = 0;

    private constructor() {
        // Private constructor to prevent direct instantiation
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    get value(): number {
        return Singleton.value;
    }

    set value(val: number) {
        Singleton.value = val;
    }
}
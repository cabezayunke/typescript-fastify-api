export interface Repository<T> {
    find(criteria: Record<string, unknown>): Promise<T & { id: string } []>;
    remove(key: string): Promise<void>;
    save(data: T & { id: string } | T): Promise<void>;
}
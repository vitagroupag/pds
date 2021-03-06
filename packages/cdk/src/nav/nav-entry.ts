export interface NavEntry {
  /** Gets or sets the name of the entry */
  name: string;
  /**
   * Gets or sets the link url of the entry. This value can either point to an absolute
   * destination or a relative router supported path value
   */
  linkUrl?: any[] | string;
  /**
   * Gets or sets an action function that is invoked with the resolved {@link deps} array
   * for the given {@link NavEntry}
   */
  action?: (...deps: any[]) => any;
  /** Gets or sets the dependency tokens for the {@link action} function */
  deps?: any[];

  /** Optional properties to build the navigation functionality */
  [propertyKey: string]: any;
}

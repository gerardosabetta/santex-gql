export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
  DateTime: any;
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  activeChannel: Channel;
  activeCustomer?: Maybe<Customer>;
  activeOrder?: Maybe<Order>;
  availableCountries: Array<Country>;
  collections: CollectionList;
  collection?: Maybe<Collection>;
  eligibleShippingMethods: Array<ShippingMethodQuote>;
  eligiblePaymentMethods: Array<PaymentMethodQuote>;
  facets: FacetList;
  facet?: Maybe<Facet>;
  me?: Maybe<CurrentUser>;
  nextOrderStates: Array<Scalars['String']>;
  order?: Maybe<Order>;
  orderByCode?: Maybe<Order>;
  product?: Maybe<Product>;
  products: ProductList;
  search: SearchResponse;
};


export type QueryCollectionsArgs = {
  options?: InputMaybe<CollectionListOptions>;
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryFacetsArgs = {
  options?: InputMaybe<FacetListOptions>;
};


export type QueryFacetArgs = {
  id: Scalars['ID'];
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};


export type QueryOrderByCodeArgs = {
  code: Scalars['String'];
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryProductsArgs = {
  options?: InputMaybe<ProductListOptions>;
};


export type QuerySearchArgs = {
  input: SearchInput;
};

export type Mutation = {
  __typename?: 'Mutation';
  addItemToOrder: UpdateOrderItemsResult;
  removeOrderLine: RemoveOrderItemsResult;
  removeAllOrderLines: RemoveOrderItemsResult;
  adjustOrderLine: UpdateOrderItemsResult;
  applyCouponCode: ApplyCouponCodeResult;
  removeCouponCode?: Maybe<Order>;
  transitionOrderToState?: Maybe<TransitionOrderToStateResult>;
  setOrderShippingAddress: ActiveOrderResult;
  setOrderBillingAddress: ActiveOrderResult;
  setOrderCustomFields: ActiveOrderResult;
  setOrderShippingMethod: SetOrderShippingMethodResult;
  addPaymentToOrder: AddPaymentToOrderResult;
  setCustomerForOrder: SetCustomerForOrderResult;
  login: NativeAuthenticationResult;
  authenticate: AuthenticationResult;
  logout: Success;
  registerCustomerAccount: RegisterCustomerAccountResult;
  refreshCustomerVerification: RefreshCustomerVerificationResult;
  updateCustomer: Customer;
  createCustomerAddress: Address;
  updateCustomerAddress: Address;
  deleteCustomerAddress: Success;
  verifyCustomerAccount: VerifyCustomerAccountResult;
  updateCustomerPassword: UpdateCustomerPasswordResult;
  requestUpdateCustomerEmailAddress: RequestUpdateCustomerEmailAddressResult;
  updateCustomerEmailAddress: UpdateCustomerEmailAddressResult;
  requestPasswordReset?: Maybe<RequestPasswordResetResult>;
  resetPassword: ResetPasswordResult;
};


export type MutationAddItemToOrderArgs = {
  productVariantId: Scalars['ID'];
  quantity: Scalars['Int'];
};


export type MutationRemoveOrderLineArgs = {
  orderLineId: Scalars['ID'];
};


export type MutationAdjustOrderLineArgs = {
  orderLineId: Scalars['ID'];
  quantity: Scalars['Int'];
};


export type MutationApplyCouponCodeArgs = {
  couponCode: Scalars['String'];
};


export type MutationRemoveCouponCodeArgs = {
  couponCode: Scalars['String'];
};


export type MutationTransitionOrderToStateArgs = {
  state: Scalars['String'];
};


export type MutationSetOrderShippingAddressArgs = {
  input: CreateAddressInput;
};


export type MutationSetOrderBillingAddressArgs = {
  input: CreateAddressInput;
};


export type MutationSetOrderCustomFieldsArgs = {
  input: UpdateOrderInput;
};


export type MutationSetOrderShippingMethodArgs = {
  shippingMethodId: Scalars['ID'];
};


export type MutationAddPaymentToOrderArgs = {
  input: PaymentInput;
};


export type MutationSetCustomerForOrderArgs = {
  input: CreateCustomerInput;
};


export type MutationLoginArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
  rememberMe?: InputMaybe<Scalars['Boolean']>;
};


export type MutationAuthenticateArgs = {
  input: AuthenticationInput;
  rememberMe?: InputMaybe<Scalars['Boolean']>;
};


export type MutationRegisterCustomerAccountArgs = {
  input: RegisterCustomerInput;
};


export type MutationRefreshCustomerVerificationArgs = {
  emailAddress: Scalars['String'];
};


export type MutationUpdateCustomerArgs = {
  input: UpdateCustomerInput;
};


export type MutationCreateCustomerAddressArgs = {
  input: CreateAddressInput;
};


export type MutationUpdateCustomerAddressArgs = {
  input: UpdateAddressInput;
};


export type MutationDeleteCustomerAddressArgs = {
  id: Scalars['ID'];
};


export type MutationVerifyCustomerAccountArgs = {
  token: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateCustomerPasswordArgs = {
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
};


export type MutationRequestUpdateCustomerEmailAddressArgs = {
  password: Scalars['String'];
  newEmailAddress: Scalars['String'];
};


export type MutationUpdateCustomerEmailAddressArgs = {
  token: Scalars['String'];
};


export type MutationRequestPasswordResetArgs = {
  emailAddress: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  token: Scalars['String'];
  password: Scalars['String'];
};

export type Address = Node & {
  __typename?: 'Address';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  fullName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  streetLine1: Scalars['String'];
  streetLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  country: Country;
  phoneNumber?: Maybe<Scalars['String']>;
  defaultShippingAddress?: Maybe<Scalars['Boolean']>;
  defaultBillingAddress?: Maybe<Scalars['Boolean']>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type Asset = Node & {
  __typename?: 'Asset';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  type: AssetType;
  fileSize: Scalars['Int'];
  mimeType: Scalars['String'];
  width: Scalars['Int'];
  height: Scalars['Int'];
  source: Scalars['String'];
  preview: Scalars['String'];
  focalPoint?: Maybe<Coordinate>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type Coordinate = {
  __typename?: 'Coordinate';
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type AssetList = PaginatedList & {
  __typename?: 'AssetList';
  items: Array<Asset>;
  totalItems: Scalars['Int'];
};

export enum AssetType {
  Image = 'IMAGE',
  Video = 'VIDEO',
  Binary = 'BINARY'
}

export type CurrentUser = {
  __typename?: 'CurrentUser';
  id: Scalars['ID'];
  identifier: Scalars['String'];
  channels: Array<CurrentUserChannel>;
};

export type CurrentUserChannel = {
  __typename?: 'CurrentUserChannel';
  id: Scalars['ID'];
  token: Scalars['String'];
  code: Scalars['String'];
  permissions: Array<Permission>;
};

export type Channel = Node & {
  __typename?: 'Channel';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  code: Scalars['String'];
  token: Scalars['String'];
  defaultTaxZone?: Maybe<Zone>;
  defaultShippingZone?: Maybe<Zone>;
  defaultLanguageCode: LanguageCode;
  currencyCode: CurrencyCode;
  pricesIncludeTax: Scalars['Boolean'];
  customFields?: Maybe<Scalars['JSON']>;
};

export type Collection = Node & {
  __typename?: 'Collection';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode?: Maybe<LanguageCode>;
  name: Scalars['String'];
  slug: Scalars['String'];
  breadcrumbs: Array<CollectionBreadcrumb>;
  position: Scalars['Int'];
  description: Scalars['String'];
  featuredAsset?: Maybe<Asset>;
  assets: Array<Asset>;
  parent?: Maybe<Collection>;
  children?: Maybe<Array<Collection>>;
  filters: Array<ConfigurableOperation>;
  translations: Array<CollectionTranslation>;
  productVariants: ProductVariantList;
  customFields?: Maybe<Scalars['JSON']>;
};


export type CollectionProductVariantsArgs = {
  options?: InputMaybe<ProductVariantListOptions>;
};

export type CollectionBreadcrumb = {
  __typename?: 'CollectionBreadcrumb';
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type CollectionTranslation = {
  __typename?: 'CollectionTranslation';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  slug: Scalars['String'];
  description: Scalars['String'];
};

export type CollectionList = PaginatedList & {
  __typename?: 'CollectionList';
  items: Array<Collection>;
  totalItems: Scalars['Int'];
};

export enum GlobalFlag {
  True = 'TRUE',
  False = 'FALSE',
  Inherit = 'INHERIT'
}

export enum AdjustmentType {
  Promotion = 'PROMOTION',
  DistributedOrderPromotion = 'DISTRIBUTED_ORDER_PROMOTION',
  Other = 'OTHER'
}

export enum DeletionResult {
  Deleted = 'DELETED',
  NotDeleted = 'NOT_DELETED'
}

export enum Permission {
  Authenticated = 'Authenticated',
  SuperAdmin = 'SuperAdmin',
  Owner = 'Owner',
  Public = 'Public',
  UpdateGlobalSettings = 'UpdateGlobalSettings',
  CreateCatalog = 'CreateCatalog',
  ReadCatalog = 'ReadCatalog',
  UpdateCatalog = 'UpdateCatalog',
  DeleteCatalog = 'DeleteCatalog',
  CreateSettings = 'CreateSettings',
  ReadSettings = 'ReadSettings',
  UpdateSettings = 'UpdateSettings',
  DeleteSettings = 'DeleteSettings',
  CreateAdministrator = 'CreateAdministrator',
  ReadAdministrator = 'ReadAdministrator',
  UpdateAdministrator = 'UpdateAdministrator',
  DeleteAdministrator = 'DeleteAdministrator',
  CreateAsset = 'CreateAsset',
  ReadAsset = 'ReadAsset',
  UpdateAsset = 'UpdateAsset',
  DeleteAsset = 'DeleteAsset',
  CreateChannel = 'CreateChannel',
  ReadChannel = 'ReadChannel',
  UpdateChannel = 'UpdateChannel',
  DeleteChannel = 'DeleteChannel',
  CreateCollection = 'CreateCollection',
  ReadCollection = 'ReadCollection',
  UpdateCollection = 'UpdateCollection',
  DeleteCollection = 'DeleteCollection',
  CreateCountry = 'CreateCountry',
  ReadCountry = 'ReadCountry',
  UpdateCountry = 'UpdateCountry',
  DeleteCountry = 'DeleteCountry',
  CreateCustomer = 'CreateCustomer',
  ReadCustomer = 'ReadCustomer',
  UpdateCustomer = 'UpdateCustomer',
  DeleteCustomer = 'DeleteCustomer',
  CreateCustomerGroup = 'CreateCustomerGroup',
  ReadCustomerGroup = 'ReadCustomerGroup',
  UpdateCustomerGroup = 'UpdateCustomerGroup',
  DeleteCustomerGroup = 'DeleteCustomerGroup',
  CreateFacet = 'CreateFacet',
  ReadFacet = 'ReadFacet',
  UpdateFacet = 'UpdateFacet',
  DeleteFacet = 'DeleteFacet',
  CreateOrder = 'CreateOrder',
  ReadOrder = 'ReadOrder',
  UpdateOrder = 'UpdateOrder',
  DeleteOrder = 'DeleteOrder',
  CreatePaymentMethod = 'CreatePaymentMethod',
  ReadPaymentMethod = 'ReadPaymentMethod',
  UpdatePaymentMethod = 'UpdatePaymentMethod',
  DeletePaymentMethod = 'DeletePaymentMethod',
  CreateProduct = 'CreateProduct',
  ReadProduct = 'ReadProduct',
  UpdateProduct = 'UpdateProduct',
  DeleteProduct = 'DeleteProduct',
  CreatePromotion = 'CreatePromotion',
  ReadPromotion = 'ReadPromotion',
  UpdatePromotion = 'UpdatePromotion',
  DeletePromotion = 'DeletePromotion',
  CreateShippingMethod = 'CreateShippingMethod',
  ReadShippingMethod = 'ReadShippingMethod',
  UpdateShippingMethod = 'UpdateShippingMethod',
  DeleteShippingMethod = 'DeleteShippingMethod',
  CreateTag = 'CreateTag',
  ReadTag = 'ReadTag',
  UpdateTag = 'UpdateTag',
  DeleteTag = 'DeleteTag',
  CreateTaxCategory = 'CreateTaxCategory',
  ReadTaxCategory = 'ReadTaxCategory',
  UpdateTaxCategory = 'UpdateTaxCategory',
  DeleteTaxCategory = 'DeleteTaxCategory',
  CreateTaxRate = 'CreateTaxRate',
  ReadTaxRate = 'ReadTaxRate',
  UpdateTaxRate = 'UpdateTaxRate',
  DeleteTaxRate = 'DeleteTaxRate',
  CreateSystem = 'CreateSystem',
  ReadSystem = 'ReadSystem',
  UpdateSystem = 'UpdateSystem',
  DeleteSystem = 'DeleteSystem',
  CreateZone = 'CreateZone',
  ReadZone = 'ReadZone',
  UpdateZone = 'UpdateZone',
  DeleteZone = 'DeleteZone'
}

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum ErrorCode {
  UnknownError = 'UNKNOWN_ERROR',
  NativeAuthStrategyError = 'NATIVE_AUTH_STRATEGY_ERROR',
  InvalidCredentialsError = 'INVALID_CREDENTIALS_ERROR',
  OrderStateTransitionError = 'ORDER_STATE_TRANSITION_ERROR',
  EmailAddressConflictError = 'EMAIL_ADDRESS_CONFLICT_ERROR',
  OrderLimitError = 'ORDER_LIMIT_ERROR',
  NegativeQuantityError = 'NEGATIVE_QUANTITY_ERROR',
  InsufficientStockError = 'INSUFFICIENT_STOCK_ERROR',
  CouponCodeInvalidError = 'COUPON_CODE_INVALID_ERROR',
  CouponCodeExpiredError = 'COUPON_CODE_EXPIRED_ERROR',
  CouponCodeLimitError = 'COUPON_CODE_LIMIT_ERROR',
  OrderModificationError = 'ORDER_MODIFICATION_ERROR',
  IneligibleShippingMethodError = 'INELIGIBLE_SHIPPING_METHOD_ERROR',
  NoActiveOrderError = 'NO_ACTIVE_ORDER_ERROR',
  OrderPaymentStateError = 'ORDER_PAYMENT_STATE_ERROR',
  IneligiblePaymentMethodError = 'INELIGIBLE_PAYMENT_METHOD_ERROR',
  PaymentFailedError = 'PAYMENT_FAILED_ERROR',
  PaymentDeclinedError = 'PAYMENT_DECLINED_ERROR',
  AlreadyLoggedInError = 'ALREADY_LOGGED_IN_ERROR',
  MissingPasswordError = 'MISSING_PASSWORD_ERROR',
  PasswordValidationError = 'PASSWORD_VALIDATION_ERROR',
  PasswordAlreadySetError = 'PASSWORD_ALREADY_SET_ERROR',
  VerificationTokenInvalidError = 'VERIFICATION_TOKEN_INVALID_ERROR',
  VerificationTokenExpiredError = 'VERIFICATION_TOKEN_EXPIRED_ERROR',
  IdentifierChangeTokenInvalidError = 'IDENTIFIER_CHANGE_TOKEN_INVALID_ERROR',
  IdentifierChangeTokenExpiredError = 'IDENTIFIER_CHANGE_TOKEN_EXPIRED_ERROR',
  PasswordResetTokenInvalidError = 'PASSWORD_RESET_TOKEN_INVALID_ERROR',
  PasswordResetTokenExpiredError = 'PASSWORD_RESET_TOKEN_EXPIRED_ERROR',
  NotVerifiedError = 'NOT_VERIFIED_ERROR'
}

export enum LogicalOperator {
  And = 'AND',
  Or = 'OR'
}

export type NativeAuthStrategyError = ErrorResult & {
  __typename?: 'NativeAuthStrategyError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type InvalidCredentialsError = ErrorResult & {
  __typename?: 'InvalidCredentialsError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  authenticationError: Scalars['String'];
};

export type OrderStateTransitionError = ErrorResult & {
  __typename?: 'OrderStateTransitionError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  transitionError: Scalars['String'];
  fromState: Scalars['String'];
  toState: Scalars['String'];
};

export type EmailAddressConflictError = ErrorResult & {
  __typename?: 'EmailAddressConflictError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type OrderLimitError = ErrorResult & {
  __typename?: 'OrderLimitError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  maxItems: Scalars['Int'];
};

export type NegativeQuantityError = ErrorResult & {
  __typename?: 'NegativeQuantityError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type InsufficientStockError = ErrorResult & {
  __typename?: 'InsufficientStockError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  quantityAvailable: Scalars['Int'];
  order: Order;
};

export type CouponCodeInvalidError = ErrorResult & {
  __typename?: 'CouponCodeInvalidError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  couponCode: Scalars['String'];
};

export type CouponCodeExpiredError = ErrorResult & {
  __typename?: 'CouponCodeExpiredError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  couponCode: Scalars['String'];
};

export type CouponCodeLimitError = ErrorResult & {
  __typename?: 'CouponCodeLimitError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  couponCode: Scalars['String'];
  limit: Scalars['Int'];
};

export type OrderModificationError = ErrorResult & {
  __typename?: 'OrderModificationError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type IneligibleShippingMethodError = ErrorResult & {
  __typename?: 'IneligibleShippingMethodError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type NoActiveOrderError = ErrorResult & {
  __typename?: 'NoActiveOrderError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type PaginatedList = {
  items: Array<Node>;
  totalItems: Scalars['Int'];
};

export type Node = {
  id: Scalars['ID'];
};

export type ErrorResult = {
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type Adjustment = {
  __typename?: 'Adjustment';
  adjustmentSource: Scalars['String'];
  type: AdjustmentType;
  description: Scalars['String'];
  amount: Scalars['Int'];
};

export type TaxLine = {
  __typename?: 'TaxLine';
  description: Scalars['String'];
  taxRate: Scalars['Float'];
};

export type ConfigArg = {
  __typename?: 'ConfigArg';
  name: Scalars['String'];
  value: Scalars['String'];
};

export type ConfigArgDefinition = {
  __typename?: 'ConfigArgDefinition';
  name: Scalars['String'];
  type: Scalars['String'];
  list: Scalars['Boolean'];
  required: Scalars['Boolean'];
  defaultValue?: Maybe<Scalars['JSON']>;
  label?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  ui?: Maybe<Scalars['JSON']>;
};

export type ConfigurableOperation = {
  __typename?: 'ConfigurableOperation';
  code: Scalars['String'];
  args: Array<ConfigArg>;
};

export type ConfigurableOperationDefinition = {
  __typename?: 'ConfigurableOperationDefinition';
  code: Scalars['String'];
  args: Array<ConfigArgDefinition>;
  description: Scalars['String'];
};

export type DeletionResponse = {
  __typename?: 'DeletionResponse';
  result: DeletionResult;
  message?: Maybe<Scalars['String']>;
};

export type ConfigArgInput = {
  name: Scalars['String'];
  value: Scalars['String'];
};

export type ConfigurableOperationInput = {
  code: Scalars['String'];
  arguments: Array<ConfigArgInput>;
};

export type StringOperators = {
  eq?: InputMaybe<Scalars['String']>;
  notEq?: InputMaybe<Scalars['String']>;
  contains?: InputMaybe<Scalars['String']>;
  notContains?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  regex?: InputMaybe<Scalars['String']>;
  isNull?: InputMaybe<Scalars['Boolean']>;
};

export type IdOperators = {
  eq?: InputMaybe<Scalars['String']>;
  notEq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  isNull?: InputMaybe<Scalars['Boolean']>;
};

export type BooleanOperators = {
  eq?: InputMaybe<Scalars['Boolean']>;
  isNull?: InputMaybe<Scalars['Boolean']>;
};

export type NumberRange = {
  start: Scalars['Float'];
  end: Scalars['Float'];
};

export type NumberOperators = {
  eq?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  between?: InputMaybe<NumberRange>;
  isNull?: InputMaybe<Scalars['Boolean']>;
};

export type DateRange = {
  start: Scalars['DateTime'];
  end: Scalars['DateTime'];
};

export type DateOperators = {
  eq?: InputMaybe<Scalars['DateTime']>;
  before?: InputMaybe<Scalars['DateTime']>;
  after?: InputMaybe<Scalars['DateTime']>;
  between?: InputMaybe<DateRange>;
  isNull?: InputMaybe<Scalars['Boolean']>;
};

export type StringListOperators = {
  inList: Scalars['String'];
};

export type NumberListOperators = {
  inList: Scalars['Float'];
};

export type BooleanListOperators = {
  inList: Scalars['Boolean'];
};

export type IdListOperators = {
  inList: Scalars['ID'];
};

export type DateListOperators = {
  inList: Scalars['DateTime'];
};

export type FacetValueFilterInput = {
  and?: InputMaybe<Scalars['ID']>;
  or?: InputMaybe<Array<Scalars['ID']>>;
};

export type SearchInput = {
  term?: InputMaybe<Scalars['String']>;
  facetValueIds?: InputMaybe<Array<Scalars['ID']>>;
  facetValueOperator?: InputMaybe<LogicalOperator>;
  facetValueFilters?: InputMaybe<Array<FacetValueFilterInput>>;
  collectionId?: InputMaybe<Scalars['ID']>;
  collectionSlug?: InputMaybe<Scalars['String']>;
  groupByProduct?: InputMaybe<Scalars['Boolean']>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SearchResultSortParameter>;
};

export type SearchResultSortParameter = {
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
};

export type CreateCustomerInput = {
  title?: InputMaybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  emailAddress: Scalars['String'];
  customFields?: InputMaybe<Scalars['JSON']>;
};

export type CreateAddressInput = {
  fullName?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  streetLine1: Scalars['String'];
  streetLine2?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  province?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  countryCode: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  defaultShippingAddress?: InputMaybe<Scalars['Boolean']>;
  defaultBillingAddress?: InputMaybe<Scalars['Boolean']>;
  customFields?: InputMaybe<Scalars['JSON']>;
};

export type UpdateAddressInput = {
  id: Scalars['ID'];
  fullName?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  streetLine1?: InputMaybe<Scalars['String']>;
  streetLine2?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  province?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  defaultShippingAddress?: InputMaybe<Scalars['Boolean']>;
  defaultBillingAddress?: InputMaybe<Scalars['Boolean']>;
  customFields?: InputMaybe<Scalars['JSON']>;
};

export type Success = {
  __typename?: 'Success';
  success: Scalars['Boolean'];
};

export type ShippingMethodQuote = {
  __typename?: 'ShippingMethodQuote';
  id: Scalars['ID'];
  price: Scalars['Int'];
  priceWithTax: Scalars['Int'];
  code: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  metadata?: Maybe<Scalars['JSON']>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type PaymentMethodQuote = {
  __typename?: 'PaymentMethodQuote';
  id: Scalars['ID'];
  code: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  isEligible: Scalars['Boolean'];
  eligibilityMessage?: Maybe<Scalars['String']>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type UpdateOrderItemsResult = Order | OrderModificationError | OrderLimitError | NegativeQuantityError | InsufficientStockError;

export type RemoveOrderItemsResult = Order | OrderModificationError;

export type SetOrderShippingMethodResult = Order | OrderModificationError | IneligibleShippingMethodError | NoActiveOrderError;

export type ApplyCouponCodeResult = Order | CouponCodeExpiredError | CouponCodeInvalidError | CouponCodeLimitError;

export type Country = Node & {
  __typename?: 'Country';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  code: Scalars['String'];
  name: Scalars['String'];
  enabled: Scalars['Boolean'];
  translations: Array<CountryTranslation>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type CountryTranslation = {
  __typename?: 'CountryTranslation';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
};

export type CountryList = PaginatedList & {
  __typename?: 'CountryList';
  items: Array<Country>;
  totalItems: Scalars['Int'];
};

export enum CurrencyCode {
  Aed = 'AED',
  Afn = 'AFN',
  All = 'ALL',
  Amd = 'AMD',
  Ang = 'ANG',
  Aoa = 'AOA',
  Ars = 'ARS',
  Aud = 'AUD',
  Awg = 'AWG',
  Azn = 'AZN',
  Bam = 'BAM',
  Bbd = 'BBD',
  Bdt = 'BDT',
  Bgn = 'BGN',
  Bhd = 'BHD',
  Bif = 'BIF',
  Bmd = 'BMD',
  Bnd = 'BND',
  Bob = 'BOB',
  Brl = 'BRL',
  Bsd = 'BSD',
  Btn = 'BTN',
  Bwp = 'BWP',
  Byn = 'BYN',
  Bzd = 'BZD',
  Cad = 'CAD',
  Cdf = 'CDF',
  Chf = 'CHF',
  Clp = 'CLP',
  Cny = 'CNY',
  Cop = 'COP',
  Crc = 'CRC',
  Cuc = 'CUC',
  Cup = 'CUP',
  Cve = 'CVE',
  Czk = 'CZK',
  Djf = 'DJF',
  Dkk = 'DKK',
  Dop = 'DOP',
  Dzd = 'DZD',
  Egp = 'EGP',
  Ern = 'ERN',
  Etb = 'ETB',
  Eur = 'EUR',
  Fjd = 'FJD',
  Fkp = 'FKP',
  Gbp = 'GBP',
  Gel = 'GEL',
  Ghs = 'GHS',
  Gip = 'GIP',
  Gmd = 'GMD',
  Gnf = 'GNF',
  Gtq = 'GTQ',
  Gyd = 'GYD',
  Hkd = 'HKD',
  Hnl = 'HNL',
  Hrk = 'HRK',
  Htg = 'HTG',
  Huf = 'HUF',
  Idr = 'IDR',
  Ils = 'ILS',
  Inr = 'INR',
  Iqd = 'IQD',
  Irr = 'IRR',
  Isk = 'ISK',
  Jmd = 'JMD',
  Jod = 'JOD',
  Jpy = 'JPY',
  Kes = 'KES',
  Kgs = 'KGS',
  Khr = 'KHR',
  Kmf = 'KMF',
  Kpw = 'KPW',
  Krw = 'KRW',
  Kwd = 'KWD',
  Kyd = 'KYD',
  Kzt = 'KZT',
  Lak = 'LAK',
  Lbp = 'LBP',
  Lkr = 'LKR',
  Lrd = 'LRD',
  Lsl = 'LSL',
  Lyd = 'LYD',
  Mad = 'MAD',
  Mdl = 'MDL',
  Mga = 'MGA',
  Mkd = 'MKD',
  Mmk = 'MMK',
  Mnt = 'MNT',
  Mop = 'MOP',
  Mru = 'MRU',
  Mur = 'MUR',
  Mvr = 'MVR',
  Mwk = 'MWK',
  Mxn = 'MXN',
  Myr = 'MYR',
  Mzn = 'MZN',
  Nad = 'NAD',
  Ngn = 'NGN',
  Nio = 'NIO',
  Nok = 'NOK',
  Npr = 'NPR',
  Nzd = 'NZD',
  Omr = 'OMR',
  Pab = 'PAB',
  Pen = 'PEN',
  Pgk = 'PGK',
  Php = 'PHP',
  Pkr = 'PKR',
  Pln = 'PLN',
  Pyg = 'PYG',
  Qar = 'QAR',
  Ron = 'RON',
  Rsd = 'RSD',
  Rub = 'RUB',
  Rwf = 'RWF',
  Sar = 'SAR',
  Sbd = 'SBD',
  Scr = 'SCR',
  Sdg = 'SDG',
  Sek = 'SEK',
  Sgd = 'SGD',
  Shp = 'SHP',
  Sll = 'SLL',
  Sos = 'SOS',
  Srd = 'SRD',
  Ssp = 'SSP',
  Stn = 'STN',
  Svc = 'SVC',
  Syp = 'SYP',
  Szl = 'SZL',
  Thb = 'THB',
  Tjs = 'TJS',
  Tmt = 'TMT',
  Tnd = 'TND',
  Top = 'TOP',
  Try = 'TRY',
  Ttd = 'TTD',
  Twd = 'TWD',
  Tzs = 'TZS',
  Uah = 'UAH',
  Ugx = 'UGX',
  Usd = 'USD',
  Uyu = 'UYU',
  Uzs = 'UZS',
  Ves = 'VES',
  Vnd = 'VND',
  Vuv = 'VUV',
  Wst = 'WST',
  Xaf = 'XAF',
  Xcd = 'XCD',
  Xof = 'XOF',
  Xpf = 'XPF',
  Yer = 'YER',
  Zar = 'ZAR',
  Zmw = 'ZMW',
  Zwl = 'ZWL'
}

export type CustomField = {
  name: Scalars['String'];
  type: Scalars['String'];
  list: Scalars['Boolean'];
  label?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Array<LocalizedString>>;
  readonly?: Maybe<Scalars['Boolean']>;
  internal?: Maybe<Scalars['Boolean']>;
  nullable?: Maybe<Scalars['Boolean']>;
  ui?: Maybe<Scalars['JSON']>;
};

export type StringCustomFieldConfig = CustomField & {
  __typename?: 'StringCustomFieldConfig';
  name: Scalars['String'];
  type: Scalars['String'];
  list: Scalars['Boolean'];
  length?: Maybe<Scalars['Int']>;
  label?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Array<LocalizedString>>;
  readonly?: Maybe<Scalars['Boolean']>;
  internal?: Maybe<Scalars['Boolean']>;
  nullable?: Maybe<Scalars['Boolean']>;
  pattern?: Maybe<Scalars['String']>;
  options?: Maybe<Array<StringFieldOption>>;
  ui?: Maybe<Scalars['JSON']>;
};

export type StringFieldOption = {
  __typename?: 'StringFieldOption';
  value: Scalars['String'];
  label?: Maybe<Array<LocalizedString>>;
};

export type LocaleStringCustomFieldConfig = CustomField & {
  __typename?: 'LocaleStringCustomFieldConfig';
  name: Scalars['String'];
  type: Scalars['String'];
  list: Scalars['Boolean'];
  length?: Maybe<Scalars['Int']>;
  label?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Array<LocalizedString>>;
  readonly?: Maybe<Scalars['Boolean']>;
  internal?: Maybe<Scalars['Boolean']>;
  nullable?: Maybe<Scalars['Boolean']>;
  pattern?: Maybe<Scalars['String']>;
  ui?: Maybe<Scalars['JSON']>;
};

export type IntCustomFieldConfig = CustomField & {
  __typename?: 'IntCustomFieldConfig';
  name: Scalars['String'];
  type: Scalars['String'];
  list: Scalars['Boolean'];
  label?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Array<LocalizedString>>;
  readonly?: Maybe<Scalars['Boolean']>;
  internal?: Maybe<Scalars['Boolean']>;
  nullable?: Maybe<Scalars['Boolean']>;
  min?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
  step?: Maybe<Scalars['Int']>;
  ui?: Maybe<Scalars['JSON']>;
};

export type FloatCustomFieldConfig = CustomField & {
  __typename?: 'FloatCustomFieldConfig';
  name: Scalars['String'];
  type: Scalars['String'];
  list: Scalars['Boolean'];
  label?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Array<LocalizedString>>;
  readonly?: Maybe<Scalars['Boolean']>;
  internal?: Maybe<Scalars['Boolean']>;
  nullable?: Maybe<Scalars['Boolean']>;
  min?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  step?: Maybe<Scalars['Float']>;
  ui?: Maybe<Scalars['JSON']>;
};

export type BooleanCustomFieldConfig = CustomField & {
  __typename?: 'BooleanCustomFieldConfig';
  name: Scalars['String'];
  type: Scalars['String'];
  list: Scalars['Boolean'];
  label?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Array<LocalizedString>>;
  readonly?: Maybe<Scalars['Boolean']>;
  internal?: Maybe<Scalars['Boolean']>;
  nullable?: Maybe<Scalars['Boolean']>;
  ui?: Maybe<Scalars['JSON']>;
};

export type DateTimeCustomFieldConfig = CustomField & {
  __typename?: 'DateTimeCustomFieldConfig';
  name: Scalars['String'];
  type: Scalars['String'];
  list: Scalars['Boolean'];
  label?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Array<LocalizedString>>;
  readonly?: Maybe<Scalars['Boolean']>;
  internal?: Maybe<Scalars['Boolean']>;
  nullable?: Maybe<Scalars['Boolean']>;
  min?: Maybe<Scalars['String']>;
  max?: Maybe<Scalars['String']>;
  step?: Maybe<Scalars['Int']>;
  ui?: Maybe<Scalars['JSON']>;
};

export type RelationCustomFieldConfig = CustomField & {
  __typename?: 'RelationCustomFieldConfig';
  name: Scalars['String'];
  type: Scalars['String'];
  list: Scalars['Boolean'];
  label?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Array<LocalizedString>>;
  readonly?: Maybe<Scalars['Boolean']>;
  internal?: Maybe<Scalars['Boolean']>;
  nullable?: Maybe<Scalars['Boolean']>;
  entity: Scalars['String'];
  scalarFields: Array<Scalars['String']>;
  ui?: Maybe<Scalars['JSON']>;
};

export type TextCustomFieldConfig = CustomField & {
  __typename?: 'TextCustomFieldConfig';
  name: Scalars['String'];
  type: Scalars['String'];
  list: Scalars['Boolean'];
  label?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Array<LocalizedString>>;
  readonly?: Maybe<Scalars['Boolean']>;
  internal?: Maybe<Scalars['Boolean']>;
  nullable?: Maybe<Scalars['Boolean']>;
  ui?: Maybe<Scalars['JSON']>;
};

export type LocalizedString = {
  __typename?: 'LocalizedString';
  languageCode: LanguageCode;
  value: Scalars['String'];
};

export type CustomFieldConfig = StringCustomFieldConfig | LocaleStringCustomFieldConfig | IntCustomFieldConfig | FloatCustomFieldConfig | BooleanCustomFieldConfig | DateTimeCustomFieldConfig | RelationCustomFieldConfig | TextCustomFieldConfig;

export type CustomerGroup = Node & {
  __typename?: 'CustomerGroup';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  customers: CustomerList;
  customFields?: Maybe<Scalars['JSON']>;
};


export type CustomerGroupCustomersArgs = {
  options?: InputMaybe<CustomerListOptions>;
};

export type CustomerListOptions = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<CustomerSortParameter>;
  filter?: InputMaybe<CustomerFilterParameter>;
  filterOperator?: InputMaybe<LogicalOperator>;
};

export type Customer = Node & {
  __typename?: 'Customer';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  emailAddress: Scalars['String'];
  addresses?: Maybe<Array<Address>>;
  orders: OrderList;
  user?: Maybe<User>;
  customFields?: Maybe<Scalars['JSON']>;
};


export type CustomerOrdersArgs = {
  options?: InputMaybe<OrderListOptions>;
};

export type CustomerList = PaginatedList & {
  __typename?: 'CustomerList';
  items: Array<Customer>;
  totalItems: Scalars['Int'];
};

export type FacetValue = Node & {
  __typename?: 'FacetValue';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  facet: Facet;
  name: Scalars['String'];
  code: Scalars['String'];
  translations: Array<FacetValueTranslation>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type FacetValueTranslation = {
  __typename?: 'FacetValueTranslation';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
};

export type Facet = Node & {
  __typename?: 'Facet';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  code: Scalars['String'];
  values: Array<FacetValue>;
  translations: Array<FacetTranslation>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type FacetTranslation = {
  __typename?: 'FacetTranslation';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
};

export type FacetList = PaginatedList & {
  __typename?: 'FacetList';
  items: Array<Facet>;
  totalItems: Scalars['Int'];
};

export type HistoryEntry = Node & {
  __typename?: 'HistoryEntry';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  type: HistoryEntryType;
  data: Scalars['JSON'];
};

export enum HistoryEntryType {
  CustomerRegistered = 'CUSTOMER_REGISTERED',
  CustomerVerified = 'CUSTOMER_VERIFIED',
  CustomerDetailUpdated = 'CUSTOMER_DETAIL_UPDATED',
  CustomerAddedToGroup = 'CUSTOMER_ADDED_TO_GROUP',
  CustomerRemovedFromGroup = 'CUSTOMER_REMOVED_FROM_GROUP',
  CustomerAddressCreated = 'CUSTOMER_ADDRESS_CREATED',
  CustomerAddressUpdated = 'CUSTOMER_ADDRESS_UPDATED',
  CustomerAddressDeleted = 'CUSTOMER_ADDRESS_DELETED',
  CustomerPasswordUpdated = 'CUSTOMER_PASSWORD_UPDATED',
  CustomerPasswordResetRequested = 'CUSTOMER_PASSWORD_RESET_REQUESTED',
  CustomerPasswordResetVerified = 'CUSTOMER_PASSWORD_RESET_VERIFIED',
  CustomerEmailUpdateRequested = 'CUSTOMER_EMAIL_UPDATE_REQUESTED',
  CustomerEmailUpdateVerified = 'CUSTOMER_EMAIL_UPDATE_VERIFIED',
  CustomerNote = 'CUSTOMER_NOTE',
  OrderStateTransition = 'ORDER_STATE_TRANSITION',
  OrderPaymentTransition = 'ORDER_PAYMENT_TRANSITION',
  OrderFulfillment = 'ORDER_FULFILLMENT',
  OrderCancellation = 'ORDER_CANCELLATION',
  OrderRefundTransition = 'ORDER_REFUND_TRANSITION',
  OrderFulfillmentTransition = 'ORDER_FULFILLMENT_TRANSITION',
  OrderNote = 'ORDER_NOTE',
  OrderCouponApplied = 'ORDER_COUPON_APPLIED',
  OrderCouponRemoved = 'ORDER_COUPON_REMOVED',
  OrderModified = 'ORDER_MODIFIED'
}

export type HistoryEntryList = PaginatedList & {
  __typename?: 'HistoryEntryList';
  items: Array<HistoryEntry>;
  totalItems: Scalars['Int'];
};

export type HistoryEntryListOptions = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<HistoryEntrySortParameter>;
  filter?: InputMaybe<HistoryEntryFilterParameter>;
  filterOperator?: InputMaybe<LogicalOperator>;
};

export enum LanguageCode {
  Af = 'af',
  Ak = 'ak',
  Sq = 'sq',
  Am = 'am',
  Ar = 'ar',
  Hy = 'hy',
  As = 'as',
  Az = 'az',
  Bm = 'bm',
  Bn = 'bn',
  Eu = 'eu',
  Be = 'be',
  Bs = 'bs',
  Br = 'br',
  Bg = 'bg',
  My = 'my',
  Ca = 'ca',
  Ce = 'ce',
  Zh = 'zh',
  ZhHans = 'zh_Hans',
  ZhHant = 'zh_Hant',
  Cu = 'cu',
  Kw = 'kw',
  Co = 'co',
  Hr = 'hr',
  Cs = 'cs',
  Da = 'da',
  Nl = 'nl',
  NlBe = 'nl_BE',
  Dz = 'dz',
  En = 'en',
  EnAu = 'en_AU',
  EnCa = 'en_CA',
  EnGb = 'en_GB',
  EnUs = 'en_US',
  Eo = 'eo',
  Et = 'et',
  Ee = 'ee',
  Fo = 'fo',
  Fi = 'fi',
  Fr = 'fr',
  FrCa = 'fr_CA',
  FrCh = 'fr_CH',
  Ff = 'ff',
  Gl = 'gl',
  Lg = 'lg',
  Ka = 'ka',
  De = 'de',
  DeAt = 'de_AT',
  DeCh = 'de_CH',
  El = 'el',
  Gu = 'gu',
  Ht = 'ht',
  Ha = 'ha',
  He = 'he',
  Hi = 'hi',
  Hu = 'hu',
  Is = 'is',
  Ig = 'ig',
  Id = 'id',
  Ia = 'ia',
  Ga = 'ga',
  It = 'it',
  Ja = 'ja',
  Jv = 'jv',
  Kl = 'kl',
  Kn = 'kn',
  Ks = 'ks',
  Kk = 'kk',
  Km = 'km',
  Ki = 'ki',
  Rw = 'rw',
  Ko = 'ko',
  Ku = 'ku',
  Ky = 'ky',
  Lo = 'lo',
  La = 'la',
  Lv = 'lv',
  Ln = 'ln',
  Lt = 'lt',
  Lu = 'lu',
  Lb = 'lb',
  Mk = 'mk',
  Mg = 'mg',
  Ms = 'ms',
  Ml = 'ml',
  Mt = 'mt',
  Gv = 'gv',
  Mi = 'mi',
  Mr = 'mr',
  Mn = 'mn',
  Ne = 'ne',
  Nd = 'nd',
  Se = 'se',
  Nb = 'nb',
  Nn = 'nn',
  Ny = 'ny',
  Or = 'or',
  Om = 'om',
  Os = 'os',
  Ps = 'ps',
  Fa = 'fa',
  FaAf = 'fa_AF',
  Pl = 'pl',
  Pt = 'pt',
  PtBr = 'pt_BR',
  PtPt = 'pt_PT',
  Pa = 'pa',
  Qu = 'qu',
  Ro = 'ro',
  RoMd = 'ro_MD',
  Rm = 'rm',
  Rn = 'rn',
  Ru = 'ru',
  Sm = 'sm',
  Sg = 'sg',
  Sa = 'sa',
  Gd = 'gd',
  Sr = 'sr',
  Sn = 'sn',
  Ii = 'ii',
  Sd = 'sd',
  Si = 'si',
  Sk = 'sk',
  Sl = 'sl',
  So = 'so',
  St = 'st',
  Es = 'es',
  EsEs = 'es_ES',
  EsMx = 'es_MX',
  Su = 'su',
  Sw = 'sw',
  SwCd = 'sw_CD',
  Sv = 'sv',
  Tg = 'tg',
  Ta = 'ta',
  Tt = 'tt',
  Te = 'te',
  Th = 'th',
  Bo = 'bo',
  Ti = 'ti',
  To = 'to',
  Tr = 'tr',
  Tk = 'tk',
  Uk = 'uk',
  Ur = 'ur',
  Ug = 'ug',
  Uz = 'uz',
  Vi = 'vi',
  Vo = 'vo',
  Cy = 'cy',
  Fy = 'fy',
  Wo = 'wo',
  Xh = 'xh',
  Yi = 'yi',
  Yo = 'yo',
  Zu = 'zu'
}

export type Order = Node & {
  __typename?: 'Order';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  orderPlacedAt?: Maybe<Scalars['DateTime']>;
  code: Scalars['String'];
  state: Scalars['String'];
  active: Scalars['Boolean'];
  customer?: Maybe<Customer>;
  shippingAddress?: Maybe<OrderAddress>;
  billingAddress?: Maybe<OrderAddress>;
  lines: Array<OrderLine>;
  surcharges: Array<Surcharge>;
  discounts: Array<Discount>;
  couponCodes: Array<Scalars['String']>;
  promotions: Array<Promotion>;
  payments?: Maybe<Array<Payment>>;
  fulfillments?: Maybe<Array<Fulfillment>>;
  totalQuantity: Scalars['Int'];
  subTotal: Scalars['Int'];
  subTotalWithTax: Scalars['Int'];
  currencyCode: CurrencyCode;
  shippingLines: Array<ShippingLine>;
  shipping: Scalars['Int'];
  shippingWithTax: Scalars['Int'];
  total: Scalars['Int'];
  totalWithTax: Scalars['Int'];
  taxSummary: Array<OrderTaxSummary>;
  history: HistoryEntryList;
  customFields?: Maybe<Scalars['JSON']>;
};


export type OrderHistoryArgs = {
  options?: InputMaybe<HistoryEntryListOptions>;
};

export type OrderTaxSummary = {
  __typename?: 'OrderTaxSummary';
  description: Scalars['String'];
  taxRate: Scalars['Float'];
  taxBase: Scalars['Int'];
  taxTotal: Scalars['Int'];
};

export type OrderAddress = {
  __typename?: 'OrderAddress';
  fullName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  streetLine1?: Maybe<Scalars['String']>;
  streetLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type OrderList = PaginatedList & {
  __typename?: 'OrderList';
  items: Array<Order>;
  totalItems: Scalars['Int'];
};

export type ShippingLine = {
  __typename?: 'ShippingLine';
  id: Scalars['ID'];
  shippingMethod: ShippingMethod;
  price: Scalars['Int'];
  priceWithTax: Scalars['Int'];
  discountedPrice: Scalars['Int'];
  discountedPriceWithTax: Scalars['Int'];
  discounts: Array<Discount>;
};

export type Discount = {
  __typename?: 'Discount';
  adjustmentSource: Scalars['String'];
  type: AdjustmentType;
  description: Scalars['String'];
  amount: Scalars['Int'];
  amountWithTax: Scalars['Int'];
};

export type OrderItem = Node & {
  __typename?: 'OrderItem';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  cancelled: Scalars['Boolean'];
  unitPrice: Scalars['Int'];
  unitPriceWithTax: Scalars['Int'];
  discountedUnitPrice: Scalars['Int'];
  discountedUnitPriceWithTax: Scalars['Int'];
  proratedUnitPrice: Scalars['Int'];
  proratedUnitPriceWithTax: Scalars['Int'];
  unitTax: Scalars['Int'];
  taxRate: Scalars['Float'];
  adjustments: Array<Adjustment>;
  taxLines: Array<TaxLine>;
  fulfillment?: Maybe<Fulfillment>;
  refundId?: Maybe<Scalars['ID']>;
};

export type OrderLine = Node & {
  __typename?: 'OrderLine';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  productVariant: ProductVariant;
  featuredAsset?: Maybe<Asset>;
  unitPrice: Scalars['Int'];
  unitPriceWithTax: Scalars['Int'];
  unitPriceChangeSinceAdded: Scalars['Int'];
  unitPriceWithTaxChangeSinceAdded: Scalars['Int'];
  discountedUnitPrice: Scalars['Int'];
  discountedUnitPriceWithTax: Scalars['Int'];
  proratedUnitPrice: Scalars['Int'];
  proratedUnitPriceWithTax: Scalars['Int'];
  quantity: Scalars['Int'];
  items: Array<OrderItem>;
  taxRate: Scalars['Float'];
  linePrice: Scalars['Int'];
  linePriceWithTax: Scalars['Int'];
  discountedLinePrice: Scalars['Int'];
  discountedLinePriceWithTax: Scalars['Int'];
  proratedLinePrice: Scalars['Int'];
  proratedLinePriceWithTax: Scalars['Int'];
  lineTax: Scalars['Int'];
  discounts: Array<Discount>;
  taxLines: Array<TaxLine>;
  order: Order;
  fulfillments?: Maybe<Array<Fulfillment>>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type Payment = Node & {
  __typename?: 'Payment';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  method: Scalars['String'];
  amount: Scalars['Int'];
  state: Scalars['String'];
  transactionId?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  refunds: Array<Refund>;
  metadata?: Maybe<Scalars['JSON']>;
};

export type Refund = Node & {
  __typename?: 'Refund';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  items: Scalars['Int'];
  shipping: Scalars['Int'];
  adjustment: Scalars['Int'];
  total: Scalars['Int'];
  method?: Maybe<Scalars['String']>;
  state: Scalars['String'];
  transactionId?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  orderItems: Array<OrderItem>;
  paymentId: Scalars['ID'];
  metadata?: Maybe<Scalars['JSON']>;
};

export type FulfillmentLineSummary = {
  __typename?: 'FulfillmentLineSummary';
  orderLine: OrderLine;
  quantity: Scalars['Int'];
};

export type Fulfillment = Node & {
  __typename?: 'Fulfillment';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  orderItems: Array<OrderItem>;
  summary: Array<FulfillmentLineSummary>;
  state: Scalars['String'];
  method: Scalars['String'];
  trackingCode?: Maybe<Scalars['String']>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type Surcharge = Node & {
  __typename?: 'Surcharge';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  description: Scalars['String'];
  sku?: Maybe<Scalars['String']>;
  taxLines: Array<TaxLine>;
  price: Scalars['Int'];
  priceWithTax: Scalars['Int'];
  taxRate: Scalars['Float'];
};

export type PaymentMethod = Node & {
  __typename?: 'PaymentMethod';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  code: Scalars['String'];
  description: Scalars['String'];
  enabled: Scalars['Boolean'];
  checker?: Maybe<ConfigurableOperation>;
  handler: ConfigurableOperation;
  customFields?: Maybe<Scalars['JSON']>;
};

export type ProductOptionGroup = Node & {
  __typename?: 'ProductOptionGroup';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  code: Scalars['String'];
  name: Scalars['String'];
  options: Array<ProductOption>;
  translations: Array<ProductOptionGroupTranslation>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type ProductOptionGroupTranslation = {
  __typename?: 'ProductOptionGroupTranslation';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
};

export type ProductOption = Node & {
  __typename?: 'ProductOption';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  code: Scalars['String'];
  name: Scalars['String'];
  groupId: Scalars['ID'];
  group: ProductOptionGroup;
  translations: Array<ProductOptionTranslation>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type ProductOptionTranslation = {
  __typename?: 'ProductOptionTranslation';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
};

export type SearchReindexResponse = {
  __typename?: 'SearchReindexResponse';
  success: Scalars['Boolean'];
};

export type SearchResponse = {
  __typename?: 'SearchResponse';
  items: Array<SearchResult>;
  totalItems: Scalars['Int'];
  facetValues: Array<FacetValueResult>;
  collections: Array<CollectionResult>;
};

export type FacetValueResult = {
  __typename?: 'FacetValueResult';
  facetValue: FacetValue;
  count: Scalars['Int'];
};

export type CollectionResult = {
  __typename?: 'CollectionResult';
  collection: Collection;
  count: Scalars['Int'];
};

export type SearchResultAsset = {
  __typename?: 'SearchResultAsset';
  id: Scalars['ID'];
  preview: Scalars['String'];
  focalPoint?: Maybe<Coordinate>;
};

export type SearchResult = {
  __typename?: 'SearchResult';
  sku: Scalars['String'];
  slug: Scalars['String'];
  productId: Scalars['ID'];
  productName: Scalars['String'];
  productAsset?: Maybe<SearchResultAsset>;
  productVariantId: Scalars['ID'];
  productVariantName: Scalars['String'];
  productVariantAsset?: Maybe<SearchResultAsset>;
  price: SearchResultPrice;
  priceWithTax: SearchResultPrice;
  currencyCode: CurrencyCode;
  description: Scalars['String'];
  facetIds: Array<Scalars['ID']>;
  facetValueIds: Array<Scalars['ID']>;
  collectionIds: Array<Scalars['ID']>;
  score: Scalars['Float'];
};

export type SearchResultPrice = PriceRange | SinglePrice;

export type SinglePrice = {
  __typename?: 'SinglePrice';
  value: Scalars['Int'];
};

export type PriceRange = {
  __typename?: 'PriceRange';
  min: Scalars['Int'];
  max: Scalars['Int'];
};

export type Product = Node & {
  __typename?: 'Product';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  slug: Scalars['String'];
  description: Scalars['String'];
  featuredAsset?: Maybe<Asset>;
  assets: Array<Asset>;
  variants: Array<ProductVariant>;
  variantList: ProductVariantList;
  optionGroups: Array<ProductOptionGroup>;
  facetValues: Array<FacetValue>;
  translations: Array<ProductTranslation>;
  collections: Array<Collection>;
  customFields?: Maybe<Scalars['JSON']>;
};


export type ProductVariantListArgs = {
  options?: InputMaybe<ProductVariantListOptions>;
};

export type ProductTranslation = {
  __typename?: 'ProductTranslation';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  slug: Scalars['String'];
  description: Scalars['String'];
};

export type ProductList = PaginatedList & {
  __typename?: 'ProductList';
  items: Array<Product>;
  totalItems: Scalars['Int'];
};

export type ProductVariantList = PaginatedList & {
  __typename?: 'ProductVariantList';
  items: Array<ProductVariant>;
  totalItems: Scalars['Int'];
};

export type ProductVariant = Node & {
  __typename?: 'ProductVariant';
  id: Scalars['ID'];
  product: Product;
  productId: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  sku: Scalars['String'];
  name: Scalars['String'];
  featuredAsset?: Maybe<Asset>;
  assets: Array<Asset>;
  price: Scalars['Int'];
  currencyCode: CurrencyCode;
  priceWithTax: Scalars['Int'];
  stockLevel: Scalars['String'];
  taxRateApplied: TaxRate;
  taxCategory: TaxCategory;
  options: Array<ProductOption>;
  facetValues: Array<FacetValue>;
  translations: Array<ProductVariantTranslation>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type ProductVariantTranslation = {
  __typename?: 'ProductVariantTranslation';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
};

export type Promotion = Node & {
  __typename?: 'Promotion';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  startsAt?: Maybe<Scalars['DateTime']>;
  endsAt?: Maybe<Scalars['DateTime']>;
  couponCode?: Maybe<Scalars['String']>;
  perCustomerUsageLimit?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  enabled: Scalars['Boolean'];
  conditions: Array<ConfigurableOperation>;
  actions: Array<ConfigurableOperation>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type PromotionList = PaginatedList & {
  __typename?: 'PromotionList';
  items: Array<Promotion>;
  totalItems: Scalars['Int'];
};

export type Role = Node & {
  __typename?: 'Role';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  code: Scalars['String'];
  description: Scalars['String'];
  permissions: Array<Permission>;
  channels: Array<Channel>;
};

export type RoleList = PaginatedList & {
  __typename?: 'RoleList';
  items: Array<Role>;
  totalItems: Scalars['Int'];
};

export type ShippingMethod = Node & {
  __typename?: 'ShippingMethod';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  code: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  fulfillmentHandlerCode: Scalars['String'];
  checker: ConfigurableOperation;
  calculator: ConfigurableOperation;
  translations: Array<ShippingMethodTranslation>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type ShippingMethodTranslation = {
  __typename?: 'ShippingMethodTranslation';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  description: Scalars['String'];
};

export type ShippingMethodList = PaginatedList & {
  __typename?: 'ShippingMethodList';
  items: Array<ShippingMethod>;
  totalItems: Scalars['Int'];
};

export type Tag = Node & {
  __typename?: 'Tag';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  value: Scalars['String'];
};

export type TagList = PaginatedList & {
  __typename?: 'TagList';
  items: Array<Tag>;
  totalItems: Scalars['Int'];
};

export type TaxCategory = Node & {
  __typename?: 'TaxCategory';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  isDefault: Scalars['Boolean'];
  customFields?: Maybe<Scalars['JSON']>;
};

export type TaxRate = Node & {
  __typename?: 'TaxRate';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  enabled: Scalars['Boolean'];
  value: Scalars['Float'];
  category: TaxCategory;
  zone: Zone;
  customerGroup?: Maybe<CustomerGroup>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type TaxRateList = PaginatedList & {
  __typename?: 'TaxRateList';
  items: Array<TaxRate>;
  totalItems: Scalars['Int'];
};

export type User = Node & {
  __typename?: 'User';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  identifier: Scalars['String'];
  verified: Scalars['Boolean'];
  roles: Array<Role>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  authenticationMethods: Array<AuthenticationMethod>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type AuthenticationMethod = Node & {
  __typename?: 'AuthenticationMethod';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  strategy: Scalars['String'];
};

export type Zone = Node & {
  __typename?: 'Zone';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  members: Array<Country>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type OrderPaymentStateError = ErrorResult & {
  __typename?: 'OrderPaymentStateError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type IneligiblePaymentMethodError = ErrorResult & {
  __typename?: 'IneligiblePaymentMethodError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  eligibilityCheckerMessage?: Maybe<Scalars['String']>;
};

export type PaymentFailedError = ErrorResult & {
  __typename?: 'PaymentFailedError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  paymentErrorMessage: Scalars['String'];
};

export type PaymentDeclinedError = ErrorResult & {
  __typename?: 'PaymentDeclinedError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  paymentErrorMessage: Scalars['String'];
};

export type AlreadyLoggedInError = ErrorResult & {
  __typename?: 'AlreadyLoggedInError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type MissingPasswordError = ErrorResult & {
  __typename?: 'MissingPasswordError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type PasswordValidationError = ErrorResult & {
  __typename?: 'PasswordValidationError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  validationErrorMessage: Scalars['String'];
};

export type PasswordAlreadySetError = ErrorResult & {
  __typename?: 'PasswordAlreadySetError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type VerificationTokenInvalidError = ErrorResult & {
  __typename?: 'VerificationTokenInvalidError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type VerificationTokenExpiredError = ErrorResult & {
  __typename?: 'VerificationTokenExpiredError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type IdentifierChangeTokenInvalidError = ErrorResult & {
  __typename?: 'IdentifierChangeTokenInvalidError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type IdentifierChangeTokenExpiredError = ErrorResult & {
  __typename?: 'IdentifierChangeTokenExpiredError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type PasswordResetTokenInvalidError = ErrorResult & {
  __typename?: 'PasswordResetTokenInvalidError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type PasswordResetTokenExpiredError = ErrorResult & {
  __typename?: 'PasswordResetTokenExpiredError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type NotVerifiedError = ErrorResult & {
  __typename?: 'NotVerifiedError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type AuthenticationInput = {
  native?: InputMaybe<NativeAuthInput>;
};

export type RegisterCustomerInput = {
  emailAddress: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type UpdateCustomerInput = {
  title?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  customFields?: InputMaybe<Scalars['JSON']>;
};

export type UpdateOrderInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
};

export type PaymentInput = {
  method: Scalars['String'];
  metadata: Scalars['JSON'];
};

export type CollectionListOptions = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<CollectionSortParameter>;
  filter?: InputMaybe<CollectionFilterParameter>;
  filterOperator?: InputMaybe<LogicalOperator>;
};

export type FacetListOptions = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<FacetSortParameter>;
  filter?: InputMaybe<FacetFilterParameter>;
  filterOperator?: InputMaybe<LogicalOperator>;
};

export type OrderListOptions = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<OrderSortParameter>;
  filter?: InputMaybe<OrderFilterParameter>;
  filterOperator?: InputMaybe<LogicalOperator>;
};

export type ProductListOptions = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ProductSortParameter>;
  filter?: InputMaybe<ProductFilterParameter>;
  filterOperator?: InputMaybe<LogicalOperator>;
};

export type ProductVariantListOptions = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ProductVariantSortParameter>;
  filter?: InputMaybe<ProductVariantFilterParameter>;
  filterOperator?: InputMaybe<LogicalOperator>;
};

export type AddPaymentToOrderResult = Order | OrderPaymentStateError | IneligiblePaymentMethodError | PaymentFailedError | PaymentDeclinedError | OrderStateTransitionError | NoActiveOrderError;

export type TransitionOrderToStateResult = Order | OrderStateTransitionError;

export type SetCustomerForOrderResult = Order | AlreadyLoggedInError | EmailAddressConflictError | NoActiveOrderError;

export type RegisterCustomerAccountResult = Success | MissingPasswordError | PasswordValidationError | NativeAuthStrategyError;

export type RefreshCustomerVerificationResult = Success | NativeAuthStrategyError;

export type VerifyCustomerAccountResult = CurrentUser | VerificationTokenInvalidError | VerificationTokenExpiredError | MissingPasswordError | PasswordValidationError | PasswordAlreadySetError | NativeAuthStrategyError;

export type UpdateCustomerPasswordResult = Success | InvalidCredentialsError | PasswordValidationError | NativeAuthStrategyError;

export type RequestUpdateCustomerEmailAddressResult = Success | InvalidCredentialsError | EmailAddressConflictError | NativeAuthStrategyError;

export type UpdateCustomerEmailAddressResult = Success | IdentifierChangeTokenInvalidError | IdentifierChangeTokenExpiredError | NativeAuthStrategyError;

export type RequestPasswordResetResult = Success | NativeAuthStrategyError;

export type ResetPasswordResult = CurrentUser | PasswordResetTokenInvalidError | PasswordResetTokenExpiredError | PasswordValidationError | NativeAuthStrategyError | NotVerifiedError;

export type NativeAuthenticationResult = CurrentUser | InvalidCredentialsError | NotVerifiedError | NativeAuthStrategyError;

export type AuthenticationResult = CurrentUser | InvalidCredentialsError | NotVerifiedError;

export type ActiveOrderResult = Order | NoActiveOrderError;

export type ProductVariantFilterParameter = {
  id?: InputMaybe<IdOperators>;
  productId?: InputMaybe<IdOperators>;
  createdAt?: InputMaybe<DateOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  languageCode?: InputMaybe<StringOperators>;
  sku?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  price?: InputMaybe<NumberOperators>;
  currencyCode?: InputMaybe<StringOperators>;
  priceWithTax?: InputMaybe<NumberOperators>;
  stockLevel?: InputMaybe<StringOperators>;
};

export type ProductVariantSortParameter = {
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  sku?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  priceWithTax?: InputMaybe<SortOrder>;
  stockLevel?: InputMaybe<SortOrder>;
};

export type CustomerFilterParameter = {
  id?: InputMaybe<IdOperators>;
  createdAt?: InputMaybe<DateOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  title?: InputMaybe<StringOperators>;
  firstName?: InputMaybe<StringOperators>;
  lastName?: InputMaybe<StringOperators>;
  phoneNumber?: InputMaybe<StringOperators>;
  emailAddress?: InputMaybe<StringOperators>;
};

export type CustomerSortParameter = {
  id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  emailAddress?: InputMaybe<SortOrder>;
};

export type OrderFilterParameter = {
  id?: InputMaybe<IdOperators>;
  createdAt?: InputMaybe<DateOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  orderPlacedAt?: InputMaybe<DateOperators>;
  code?: InputMaybe<StringOperators>;
  state?: InputMaybe<StringOperators>;
  active?: InputMaybe<BooleanOperators>;
  totalQuantity?: InputMaybe<NumberOperators>;
  subTotal?: InputMaybe<NumberOperators>;
  subTotalWithTax?: InputMaybe<NumberOperators>;
  currencyCode?: InputMaybe<StringOperators>;
  shipping?: InputMaybe<NumberOperators>;
  shippingWithTax?: InputMaybe<NumberOperators>;
  total?: InputMaybe<NumberOperators>;
  totalWithTax?: InputMaybe<NumberOperators>;
};

export type OrderSortParameter = {
  id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  orderPlacedAt?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  totalQuantity?: InputMaybe<SortOrder>;
  subTotal?: InputMaybe<SortOrder>;
  subTotalWithTax?: InputMaybe<SortOrder>;
  shipping?: InputMaybe<SortOrder>;
  shippingWithTax?: InputMaybe<SortOrder>;
  total?: InputMaybe<SortOrder>;
  totalWithTax?: InputMaybe<SortOrder>;
};

export type HistoryEntryFilterParameter = {
  id?: InputMaybe<IdOperators>;
  createdAt?: InputMaybe<DateOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  type?: InputMaybe<StringOperators>;
};

export type HistoryEntrySortParameter = {
  id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CollectionFilterParameter = {
  id?: InputMaybe<IdOperators>;
  createdAt?: InputMaybe<DateOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  slug?: InputMaybe<StringOperators>;
  position?: InputMaybe<NumberOperators>;
  description?: InputMaybe<StringOperators>;
};

export type CollectionSortParameter = {
  id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
};

export type FacetFilterParameter = {
  id?: InputMaybe<IdOperators>;
  createdAt?: InputMaybe<DateOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  code?: InputMaybe<StringOperators>;
};

export type FacetSortParameter = {
  id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
};

export type ProductFilterParameter = {
  id?: InputMaybe<IdOperators>;
  createdAt?: InputMaybe<DateOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  slug?: InputMaybe<StringOperators>;
  description?: InputMaybe<StringOperators>;
};

export type ProductSortParameter = {
  id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
};

export type NativeAuthInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

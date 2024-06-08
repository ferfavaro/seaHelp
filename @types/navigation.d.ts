import Package from "../domain/entities/Package";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      ImageView:
        | {
            image?: string;
          }
        | undefined;
      FieldsView: undefined;
    }
  }
}

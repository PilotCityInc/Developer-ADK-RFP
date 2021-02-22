export default interface MongoDoc {
  data: {
    adks: Record<string, any>[];
    programDesc: string;
    programName: string;
  };
  save: () => Promise<any>;
  changeStream: any;
}

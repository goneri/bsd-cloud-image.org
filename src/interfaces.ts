export interface ImagesDefType {
  flavor: string;
  url: string;
}

export interface VersionDefType {
  name: string;
  images: ImagesDefType[];
}

//@ts-ignore
export interface OSDefType {
  name: string;
  versions: VersionDefType[];
}

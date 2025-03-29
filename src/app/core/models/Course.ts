import { Reservation } from "./Reservation";

export class Course {
    id_Course!: number;
    title_Course!: string;
    description_Course: string;
    language_Course: string;
    price_Course!: number;
    level_Course: string;
    published_Course: boolean;
    thumbnailUrl_Course: string;
    duration_Course: number;
    createdAt_Course: string;
    updatedAt_Course: string;
    rating_Course: number;
    name_Category: string;
    courseType!: CourseType;
    sessionDate!: string;
    reservations!: Reservation[];
    sessionDates: string[];
  
    constructor(
      id_Course: number,
      title_Course: string,
      description_Course: string,
      language_Course: string,
      price_Course: number,
      level_Course: string,
      published_Course: boolean,
      thumbnailUrl_Course: string,
      duration_Course: number,
      createdAt_Course: string,
      updatedAt_Course: string,
      rating_Course: number,
      name_Category: string,
      courseType: CourseType,
      sessionDate: string,
      reservations: Reservation[],
      sessionDates: string[]
    ) {
      this.id_Course = id_Course;
      this.title_Course = title_Course;
      this.description_Course = description_Course;
      this.language_Course = language_Course;
      this.price_Course = price_Course;
      this.level_Course = level_Course;
      this.published_Course = published_Course;
      this.thumbnailUrl_Course = thumbnailUrl_Course;
      this.duration_Course = duration_Course;
      this.createdAt_Course = createdAt_Course;
      this.updatedAt_Course = updatedAt_Course;
      this.rating_Course = rating_Course;
      this.name_Category = name_Category;
      this.courseType = courseType;
      this.sessionDate = sessionDate;
      this.reservations = reservations;
      this.sessionDates = sessionDates;
    }
  }
  
  export enum CourseType {
    ONLINE = "ONLINE",
    LIVE = "LIVE"
  }
  
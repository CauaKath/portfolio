import { type ITimelineList, TimelinePointType } from '../interfaces/timelinePoint'

export const timelinePoints: ITimelineList = {
  "2018": [
    {
      id: 1,
      title: "packer-and-stocker",
      location: "Rancho Bom",
      start: "2018-09-10",
      end: "2020-01-17",
      type: TimelinePointType.WORK
    }
  ],
  "2020": [
    {
      id: 2,
      title: "information-systems-programmer",
      location: "Senai",
      start: "2020-02-03",
      end: "2022-03-04",
      type: TimelinePointType.EDUCATION
    }
  ],
  "2021": [
    {
      id: 3,
			title: "introduction-to-agile-scrum",
			location: "Grupo Voitto - EAD",
			start: "2021-08-16",
			end: "2021-08-20",
			type: TimelinePointType.EDUCATION
		},
    {
			id: 4,
			title: "english-course",
			location: "Rockfeller",
			start: "2021-08-28",
			end: "",
			type: TimelinePointType.EDUCATION
		}
  ],
  "2022": [
    {
			id: 5,
			title: "software-developer",
			location: "WEG",
			start: "2022-03-07",
			end: "2022-09-05",
			type: TimelinePointType.WORK
		},
    {
			id: 6,
			title: "degree-in-system-analysis-and-development",
			location: "Senai",
			start: "2022-08-15",
			end: "",
			type: TimelinePointType.EDUCATION
		},
    {
			id: 7,
			title: "software-developer",
			location: "Adapcon",
			start: "2022-09-05",
			end: "",
			type: TimelinePointType.WORK
		}
  ]
};
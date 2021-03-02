export const findActivity = (activities = [], activityId) => 
  activities.find(activity => activity.id+'' === activityId)
import serviceUtility from '@/services/serviceUtility';

// Resolve a list of all active surveys
export default {
  getCarouselContent: function() {
    return serviceUtility.callAPI(serviceUtility.GET, '/carousel_content/');
  }
}

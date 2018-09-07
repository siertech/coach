package metricasubmit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.fasterxml.jackson.annotation.JsonView;
import com.siertech.stapi.model.GenericControl;
import com.siertech.stapi.util.AjaxResponse;

@Controller
@Secured("IS_AUTHENTICATED_FULLY")
public class MetricaSubmitControl extends GenericControl<MetricaSubmit> {
	
	
	@Autowired
	private MetricaSubmitService metricasubmitService;
	

	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/metricasubmit/change-attr-value", method=RequestMethod.GET)
    public AjaxResponse<MetricaSubmit> changeAttr(@RequestParam Long  id, @RequestParam String key, @RequestParam String value){
		
		metricasubmitService.changeAttr(id, key, value);
		return null;
	}
	
	
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/metricasubmit/add/", method=RequestMethod.POST)
    public AjaxResponse<MetricaSubmit> addOrUpdate(@RequestBody MetricaSubmit item){
		
		return addOrUpdateAndRespond(item);
	}
	
	@Override
	@RequestMapping(value="/metricasubmit", method=RequestMethod.GET)
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
    public AjaxResponse<MetricaSubmit> getAll(){
		
		return this.getAllAndRespond();

	}
	
	//Por id
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/metricasubmit/get", method= RequestMethod.GET)
	public AjaxResponse<MetricaSubmit> getById(@RequestParam Long id){
		
		
		return getByIdAndRespond(id);
   	
	}
	
	//Atrav s de uma busca
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/metricasubmit/busca", method= RequestMethod.GET)
	public AjaxResponse<MetricaSubmit> getLike(@RequestParam String propriedade,@RequestParam String query){
		
		return getLikeAndRespond(propriedade,query);
		
	}
	
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/metricasubmit/delete/", method=RequestMethod.POST)
    public AjaxResponse<MetricaSubmit> delete(@RequestBody long[] ids){
		
		metricasubmitService.deleteByIds(ids);
		
		return null;

	}


	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/metricasubmit/busca/map", method= RequestMethod.GET)
	public AjaxResponse<MetricaSubmit> getLikeMap(@RequestParam String[] qs,@RequestParam int pagina,@RequestParam int max,@RequestParam String extra) {
		
		return getLikeMapAndRespond(qs, pagina, max, extra);
	}
	
	
}

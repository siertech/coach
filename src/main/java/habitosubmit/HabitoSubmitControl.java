package habitosubmit;
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
public class HabitoSubmitControl extends GenericControl<HabitoSubmit> {
	
	
	@Autowired
	private HabitoSubmitService habitosubmitService;
	

	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/habitosubmit/change-attr-value", method=RequestMethod.GET)
    public AjaxResponse<HabitoSubmit> changeAttr(@RequestParam Long  id, @RequestParam String key, @RequestParam String value){
		
		habitosubmitService.changeAttr(id, key, value);
		return null;
	}
	
	
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/habitosubmit/add/", method=RequestMethod.POST)
    public AjaxResponse<HabitoSubmit> addOrUpdate(@RequestBody HabitoSubmit item){
		
		return addOrUpdateAndRespond(item);
	}
	
	@Override
	@RequestMapping(value="/habitosubmit", method=RequestMethod.GET)
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
    public AjaxResponse<HabitoSubmit> getAll(){
		
		return this.getAllAndRespond();

	}
	
	//Por id
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/habitosubmit/get", method= RequestMethod.GET)
	public AjaxResponse<HabitoSubmit> getById(@RequestParam Long id){
		
		
		return getByIdAndRespond(id);
   	
	}
	
	//Atrav s de uma busca
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/habitosubmit/busca", method= RequestMethod.GET)
	public AjaxResponse<HabitoSubmit> getLike(@RequestParam String propriedade,@RequestParam String query){
		
		return getLikeAndRespond(propriedade,query);
		
	}
	
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/habitosubmit/delete/", method=RequestMethod.POST)
    public AjaxResponse<HabitoSubmit> delete(@RequestBody long[] ids){
		
		habitosubmitService.deleteByIds(ids);
		
		return null;

	}


	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/habitosubmit/busca/map", method= RequestMethod.GET)
	public AjaxResponse<HabitoSubmit> getLikeMap(@RequestParam String[] qs,@RequestParam int pagina,@RequestParam int max,@RequestParam String extra) {
		
		return getLikeMapAndRespond(qs, pagina, max, extra);
	}
	
	
}

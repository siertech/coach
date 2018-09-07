package diarioemocional;
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
public class DiarioEmocionalControl extends GenericControl<DiarioEmocional> {
	
	
	@Autowired
	private DiarioEmocionalService diarioemocionalService;
	

	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/diarioemocional/change-attr-value", method=RequestMethod.GET)
    public AjaxResponse<DiarioEmocional> changeAttr(@RequestParam Long  id, @RequestParam String key, @RequestParam String value){
		
		diarioemocionalService.changeAttr(id, key, value);
		return null;
	}
	
	
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/diarioemocional/add/", method=RequestMethod.POST)
    public AjaxResponse<DiarioEmocional> addOrUpdate(@RequestBody DiarioEmocional item){
		
		return addOrUpdateAndRespond(item);
	}
	
	@Override
	@RequestMapping(value="/diarioemocional", method=RequestMethod.GET)
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
    public AjaxResponse<DiarioEmocional> getAll(){
		
		return this.getAllAndRespond();

	}
	
	//Por id
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/diarioemocional/get", method= RequestMethod.GET)
	public AjaxResponse<DiarioEmocional> getById(@RequestParam Long id){
		
		
		return getByIdAndRespond(id);
   	
	}
	
	//Atrav s de uma busca
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/diarioemocional/busca", method= RequestMethod.GET)
	public AjaxResponse<DiarioEmocional> getLike(@RequestParam String propriedade,@RequestParam String query){
		
		return getLikeAndRespond(propriedade,query);
		
	}
	
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/diarioemocional/delete/", method=RequestMethod.POST)
    public AjaxResponse<DiarioEmocional> delete(@RequestBody long[] ids){
		
		diarioemocionalService.deleteByIds(ids);
		
		return null;

	}


	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/diarioemocional/busca/map", method= RequestMethod.GET)
	public AjaxResponse<DiarioEmocional> getLikeMap(@RequestParam String[] qs,@RequestParam int pagina,@RequestParam int max,@RequestParam String extra) {
		
		return getLikeMapAndRespond(qs, pagina, max, extra);
	}
	
	
}

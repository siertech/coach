package frequenciasonora;
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
public class FrequenciaSonoraControl extends GenericControl<FrequenciaSonora> {
	
	
	@Autowired
	private FrequenciaSonoraService frequenciasonoraService;
	

	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/frequenciasonora/change-attr-value", method=RequestMethod.GET)
    public AjaxResponse<FrequenciaSonora> changeAttr(@RequestParam Long  id, @RequestParam String key, @RequestParam String value){
		
		frequenciasonoraService.changeAttr(id, key, value);
		return null;
	}
	
	
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/frequenciasonora/add/", method=RequestMethod.POST)
    public AjaxResponse<FrequenciaSonora> addOrUpdate(@RequestBody FrequenciaSonora item){
		
		return addOrUpdateAndRespond(item);
	}
	
	@Override
	@RequestMapping(value="/frequenciasonora", method=RequestMethod.GET)
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
    public AjaxResponse<FrequenciaSonora> getAll(){
		
		return this.getAllAndRespond();

	}
	
	//Por id
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/frequenciasonora/get", method= RequestMethod.GET)
	public AjaxResponse<FrequenciaSonora> getById(@RequestParam Long id){
		
		
		return getByIdAndRespond(id);
   	
	}
	
	//Atrav s de uma busca
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/frequenciasonora/busca", method= RequestMethod.GET)
	public AjaxResponse<FrequenciaSonora> getLike(@RequestParam String propriedade,@RequestParam String query){
		
		return getLikeAndRespond(propriedade,query);
		
	}
	
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/frequenciasonora/delete/", method=RequestMethod.POST)
    public AjaxResponse<FrequenciaSonora> delete(@RequestBody long[] ids){
		
		frequenciasonoraService.deleteByIds(ids);
		
		return null;

	}


	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/frequenciasonora/busca/map", method= RequestMethod.GET)
	public AjaxResponse<FrequenciaSonora> getLikeMap(@RequestParam String[] qs,@RequestParam int pagina,@RequestParam int max,@RequestParam String extra) {
		
		return getLikeMapAndRespond(qs, pagina, max, extra);
	}
	
	
}

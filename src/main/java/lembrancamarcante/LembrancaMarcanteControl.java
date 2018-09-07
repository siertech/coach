package lembrancamarcante;
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
public class LembrancaMarcanteControl extends GenericControl<LembrancaMarcante> {
	
	
	@Autowired
	private LembrancaMarcanteService lembrancamarcanteService;
	

	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/lembrancamarcante/change-attr-value", method=RequestMethod.GET)
    public AjaxResponse<LembrancaMarcante> changeAttr(@RequestParam Long  id, @RequestParam String key, @RequestParam String value){
		
		lembrancamarcanteService.changeAttr(id, key, value);
		return null;
	}
	
	
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/lembrancamarcante/add/", method=RequestMethod.POST)
    public AjaxResponse<LembrancaMarcante> addOrUpdate(@RequestBody LembrancaMarcante item){
		
		return addOrUpdateAndRespond(item);
	}
	
	@Override
	@RequestMapping(value="/lembrancamarcante", method=RequestMethod.GET)
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
    public AjaxResponse<LembrancaMarcante> getAll(){
		
		return this.getAllAndRespond();

	}
	
	//Por id
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/lembrancamarcante/get", method= RequestMethod.GET)
	public AjaxResponse<LembrancaMarcante> getById(@RequestParam Long id){
		
		
		return getByIdAndRespond(id);
   	
	}
	
	//Atrav s de uma busca
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/lembrancamarcante/busca", method= RequestMethod.GET)
	public AjaxResponse<LembrancaMarcante> getLike(@RequestParam String propriedade,@RequestParam String query){
		
		return getLikeAndRespond(propriedade,query);
		
	}
	
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/lembrancamarcante/delete/", method=RequestMethod.POST)
    public AjaxResponse<LembrancaMarcante> delete(@RequestBody long[] ids){
		
		lembrancamarcanteService.deleteByIds(ids);
		
		return null;

	}


	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/lembrancamarcante/busca/map", method= RequestMethod.GET)
	public AjaxResponse<LembrancaMarcante> getLikeMap(@RequestParam String[] qs,@RequestParam int pagina,@RequestParam int max,@RequestParam String extra) {
		
		return getLikeMapAndRespond(qs, pagina, max, extra);
	}
	
	
}

package buscatransderivacional;
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
public class BuscaTransderivacionalControl extends GenericControl<BuscaTransderivacional> {
	
	
	@Autowired
	private BuscaTransderivacionalService buscatransderivacionalService;
	

	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/buscatransderivacional/change-attr-value", method=RequestMethod.GET)
    public AjaxResponse<BuscaTransderivacional> changeAttr(@RequestParam Long  id, @RequestParam String key, @RequestParam String value){
		
		buscatransderivacionalService.changeAttr(id, key, value);
		return null;
	}
	
	
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/buscatransderivacional/add/", method=RequestMethod.POST)
    public AjaxResponse<BuscaTransderivacional> addOrUpdate(@RequestBody BuscaTransderivacional item){
		
		return addOrUpdateAndRespond(item);
	}
	
	@Override
	@RequestMapping(value="/buscatransderivacional", method=RequestMethod.GET)
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
    public AjaxResponse<BuscaTransderivacional> getAll(){
		
		return this.getAllAndRespond();

	}
	
	//Por id
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/buscatransderivacional/get", method= RequestMethod.GET)
	public AjaxResponse<BuscaTransderivacional> getById(@RequestParam Long id){
		
		
		return getByIdAndRespond(id);
   	
	}
	
	//Atrav s de uma busca
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/buscatransderivacional/busca", method= RequestMethod.GET)
	public AjaxResponse<BuscaTransderivacional> getLike(@RequestParam String propriedade,@RequestParam String query){
		
		return getLikeAndRespond(propriedade,query);
		
	}
	
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/buscatransderivacional/delete/", method=RequestMethod.POST)
    public AjaxResponse<BuscaTransderivacional> delete(@RequestBody long[] ids){
		
		buscatransderivacionalService.deleteByIds(ids);
		
		return null;

	}


	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/buscatransderivacional/busca/map", method= RequestMethod.GET)
	public AjaxResponse<BuscaTransderivacional> getLikeMap(@RequestParam String[] qs,@RequestParam int pagina,@RequestParam int max,@RequestParam String extra) {
		
		return getLikeMapAndRespond(qs, pagina, max, extra);
	}
	
	
}

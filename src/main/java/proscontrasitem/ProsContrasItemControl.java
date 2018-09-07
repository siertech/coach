package proscontrasitem;
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
public class ProsContrasItemControl extends GenericControl<ProsContrasItem> {
	
	
	@Autowired
	private ProsContrasItemService proscontrasitemService;
	

	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/proscontrasitem/change-attr-value", method=RequestMethod.GET)
    public AjaxResponse<ProsContrasItem> changeAttr(@RequestParam Long  id, @RequestParam String key, @RequestParam String value){
		
		proscontrasitemService.changeAttr(id, key, value);
		return null;
	}
	
	
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/proscontrasitem/add/", method=RequestMethod.POST)
    public AjaxResponse<ProsContrasItem> addOrUpdate(@RequestBody ProsContrasItem item){
		
		return addOrUpdateAndRespond(item);
	}
	
	@Override
	@RequestMapping(value="/proscontrasitem", method=RequestMethod.GET)
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
    public AjaxResponse<ProsContrasItem> getAll(){
		
		return this.getAllAndRespond();

	}
	
	//Por id
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/proscontrasitem/get", method= RequestMethod.GET)
	public AjaxResponse<ProsContrasItem> getById(@RequestParam Long id){
		
		
		return getByIdAndRespond(id);
   	
	}
	
	//Atrav s de uma busca
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/proscontrasitem/busca", method= RequestMethod.GET)
	public AjaxResponse<ProsContrasItem> getLike(@RequestParam String propriedade,@RequestParam String query){
		
		return getLikeAndRespond(propriedade,query);
		
	}
	
	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/proscontrasitem/delete/", method=RequestMethod.POST)
    public AjaxResponse<ProsContrasItem> delete(@RequestBody long[] ids){
		
		proscontrasitemService.deleteByIds(ids);
		
		return null;

	}


	@Override
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	@ResponseBody
	@RequestMapping(value="/proscontrasitem/busca/map", method= RequestMethod.GET)
	public AjaxResponse<ProsContrasItem> getLikeMap(@RequestParam String[] qs,@RequestParam int pagina,@RequestParam int max,@RequestParam String extra) {
		
		return getLikeMapAndRespond(qs, pagina, max, extra);
	}
	
	
}
